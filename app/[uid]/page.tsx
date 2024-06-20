import { Metadata } from "next";
import { notFound } from "next/navigation";
import { PrismicRichText, SliceZone } from "@prismicio/react";
import { createClient } from "@/prismicio";
import { components as marketingComponents } from "@/slices/marketing";
import { components as slidesComponents } from "@/slices/slides";
import { asText } from "@prismicio/client";
import {
  AuthorDocument,
  DeckDocument,
  SettingsDocument,
} from "@/prismicio-types";
import Scaler from "@/components/Slides/Scaler";
import { SliderControls } from "@/components/Slides/SliderControls";

type Params = { uid: string };

export default async function Page({ params }: { params: Params }) {
  const client = createClient();

  const page = await client
    .getByUID<DeckDocument>("deck", params.uid)
    .catch(() => notFound());

  const settings = await client
    .getSingle<SettingsDocument>("settings")
    .catch(() => notFound());

  const author = await client.getByUID<AuthorDocument>(
    "author",
    page.data.author.uid
  );

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
                components={{ ...marketingComponents, ...slidesComponents }}
                context={{ page: page.data, settings: settings.data }}
              />
          </SliderControls>
        </div>
      </Scaler>
    </div>
  );
}

export async function generateMetadata({
  params,
}: {
  params: Params;
}): Promise<Metadata> {
  const client = createClient();
  const page = await client
    .getByUID("deck", params.uid)
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
    return { uid: page.uid };
  });
}
