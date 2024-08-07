export const dynamic = "force-dynamic";

import fs from "fs";
import { notFound } from "next/navigation";
import { SliceZone } from "@prismicio/react";
import { createClient } from "@/prismicio";
import { asText } from "@prismicio/client";
import { DeckDocument, SettingsDocument } from "@/prismicio-types";
import * as crypto from "crypto";
import PasswordForm from "@/components/PasswordForm";
import { components as slidesComponents } from "@/slices/slides";
import Scaler from "@/components/Slides/Scaler";
import PdfButton from "@/components/PdfButton";

type Params = { uid: string };

export default async function Page({
  params,
  searchParams,
}: {
  params: Params;
  searchParams: { pwd?: string };
}) {
  const client = createClient();

  const uidsHashTable = (
    await client.getAllByType<DeckDocument>("deck").catch(() => notFound())
  ).map((doc) => {
    return {
      uid: doc.uid,
      hash: crypto.createHash("sha256").update(doc.uid).digest("hex"),
    };
  });

  const pageUid = uidsHashTable.find((uid) => uid.hash === params.uid)?.uid;

  const page = await client
    .getByUID<DeckDocument>("deck", pageUid!)
    .catch(() => notFound());

  const settings = await client
    .getSingle<SettingsDocument>("settings")
    .catch(() => notFound());

  const isProtected = page.data.activate_password;

  if (isProtected) {
    const password = page.data.password;

    if (!searchParams.pwd) {
      return <PasswordForm hash={params.uid!} isPdf />;
    } else {
      try {
        const privateKey = process.env.PRIVATE_KEY!;
        const encryptedPassword = Buffer.from(
          decodeURIComponent(searchParams.pwd!),
          "base64"
        );

        const decrypted = crypto.privateDecrypt(privateKey, encryptedPassword);

        if (decrypted.toString() !== password) {
          return <PasswordForm hash={params.uid!} />;
        }
      } catch (error) {
        console.log(error);
      }
    }
  }

  return (
    <>
      <div className="max-w-screen-3xl mx-auto"></div>
      <PdfButton
        title={asText(page.data.title)}
        pages={page.data.slices.length}
      />
      {page.data.slices.map((slice, index) => (
        <Scaler key={index}>
          <div id={"slice" + index} className="relative p-8">
            <SliceZone
              slices={[slice]}
              components={{ ...slidesComponents }}
              context={{ page: page.data, settings: settings.data }}
            />
          </div>
        </Scaler>
      ))}
    </>
  );
}

// We cannot use this as we need SSR to check pwd (we could use Middleware, but not sure if it's worth it)
// export async function generateStaticParams() {
//   const client = createClient();
//   const pages = await client.getAllByType("deck");

//   return pages.map((page) => {
//     return { uid: crypto.createHash('sha256').update(page.uid).digest('hex') };
//   });
// }
