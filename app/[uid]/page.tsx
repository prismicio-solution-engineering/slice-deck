import { Metadata } from "next";
import { notFound } from "next/navigation";
import { PrismicRichText, SliceZone } from "@prismicio/react";
import { createClient } from "@/prismicio";
import { asText } from "@prismicio/client";
import {
  AuthorDocument,
  DeckDocument,
  SettingsDocument,
} from "@/prismicio-types";
import * as crypto from 'crypto';
import { components as slidesComponents } from "@/slices/slides";
import Scaler from "@/components/Slides/Scaler";
import { SliderControls } from "@/components/Slides/SliderControls";
import PasswordForm from "@/components/PasswordForm";

type Params = { uid: string };

export default async function Page({
  params,
  searchParams }: {
    params: Params
    searchParams: { pwd?: string };
  }) {
  const client = createClient();

  const uidsHashTable = (await client
    .getAllByType<DeckDocument>("deck")
    .catch(() => notFound())).map((doc) => { return { uid: doc.uid, hash: crypto.createHash('sha256').update(doc.uid).digest('hex') } })

  const pageUid = uidsHashTable.find((uid) => uid.hash === params.uid)?.uid

  const page = await client
    .getByUID<DeckDocument>("deck", pageUid!)
    .catch(() => notFound());

  const settings = await client
    .getSingle<SettingsDocument>("settings")
    .catch(() => notFound());

  const isProtected = page.data.activate_password

  if(isProtected){

    console.log("protected honey","my uid", pageUid)
    const password = page.data.password

    console.log("my search params",searchParams)
    console.log("!searchParams",!searchParams)
    console.log("wow")
    console.log("searchParams!.pwd",searchParams!.pwd)
    console.log("wow")
    console.log("!searchParams!.pwd",!searchParams!.pwd)
    console.log("wow")
    console.log(!searchParams!.pwd)
    console.log("wow")


    if (!searchParams.pwd) {
      console.log("no params?","my pwd", password)
      return (
        <PasswordForm hash={params.uid!} />
      )
    } else {
      const privateKey = process.env.PRIVATE_KEY!
      const encryptedPassword = Buffer.from(decodeURIComponent(searchParams.pwd!), 'base64');
  
      const decrypted = crypto.privateDecrypt(privateKey,
        encryptedPassword
      );
  
      if (decrypted.toString() !== password) {
        return (
          <PasswordForm hash={params.uid!} />
        )
      }
    }
  }

  return (
    <div className="max-w-screen-3xl mx-auto">
      <PrismicRichText field={page.data.title} />
      <p>Last updated : {new Date(page.last_publication_date).toUTCString()}</p>

      {/* <Calendar author={author} /> */}
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
      </Scaler>
    </div>
  );
}

export async function generateMetadata({
  params
}: {
  params: Params;
}): Promise<Metadata> {
  const client = createClient();

  const uidsHashTable = (await client
    .getAllByType<DeckDocument>("deck")
    .catch(() => notFound())).map((doc) => { return { uid: doc.uid, hash: crypto.createHash('sha256').update(doc.uid).digest('hex') } })

  const pageUid = uidsHashTable.find((uid) => uid.hash === params.uid)?.uid

  const page = await client
    .getByUID<DeckDocument>("deck", pageUid!)
    .catch(() => notFound());

  return {
    title: page.data.meta_title || page.data.company_name,
    description: page.data.meta_description || asText(page.data.title),
  };
}

export async function generateStaticParams() {
  const client = createClient();
  const pages = await client.getAllByType("deck");

  return pages.map((page) => {
    return { uid:  crypto.createHash('sha256').update(page.uid).digest('hex') };
  });
}
