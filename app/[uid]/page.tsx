export const dynamic = "force-dynamic";

import { notFound } from "next/navigation";
import { SliceZone } from "@prismicio/react";
import { createClient } from "@/prismicio";
import { DeckDocument, SettingsDocument } from "@/prismicio-types";
import * as crypto from "crypto";
import { components as slidesComponents } from "@/slices/slides";
import Scaler from "@/components/Slides/Scaler";
import { SliderControls } from "@/components/Slides/SliderControls";
import PasswordForm from "@/components/PasswordForm";

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
      return <PasswordForm hash={params.uid!} />;
    } else {
      const privateKey = process.env.PRIVATE_KEY!;
      const encryptedPassword = Buffer.from(
        decodeURIComponent(searchParams.pwd!),
        "base64"
      );

      const decrypted = crypto.privateDecrypt(privateKey, encryptedPassword);

      if (decrypted.toString() !== password) {
        return <PasswordForm hash={params.uid!} />;
      }
    }
  }

  return (
    <div className="max-w-screen-3xl mx-auto">
      <Scaler>
        <div className="relative">
          <SliderControls>
            <SliceZone
              slices={page.data.slices}
              components={{ ...slidesComponents }}
              context={{ page: page.data, settings: settings.data }}
            />
          </SliderControls>
        </div>
        <p className="w-full mt-4 text-left">
          Last updated : {new Date(page.last_publication_date).toUTCString()}
        </p>
      </Scaler>
    </div>
  );
}

// We cannot use this as we need SSR to check pwd (we could use Middleware, but not sure if it's worth it)
// export async function generateStaticParams() {
//   const client = createClient();
//   const pages = await client.getAllByType("deck");

//   return pages.map((page) => {
//     return { uid:  crypto.createHash('sha256').update(page.uid).digest('hex') };
//   });
// }
