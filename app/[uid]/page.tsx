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
import { Calendar } from "./components/Calendar";
import { PrismicNextImage } from "@prismicio/next";
import { Header } from "@/components/Slides/Header";
import { Container } from "@/components/Slides/Container";
import { SlideTwoCols } from "@/components/Slides/SlideTwoCols";
import Scaler from "@/components/Slides/Scaler";
import { SlideFullWidth } from "@/components/Slides/SlideFullWidth";
import { Card } from "@/components/Card";
import { SliderControls } from "@/components/Slides/SliderControls";
import { LeftCol, RightCol } from "@/components/Slides/Columns";

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

      {/* <SliceZone
        slices={page.data.slices}
        components={{ ...marketingComponents, ...slidesComponents }}
      /> */}
      <div className="w-full mx-auto">
        <h2 className="mb-16 font-semibold text-3xl">Frames</h2>
        <h3 className="mb-10 font-semibold text-2xl"> Full</h3>
        <Scaler>
          <div className="relative">
            <SliderControls>
              <Container page={page.data} settings={settings.data}>
                <SlideFullWidth>
                  <p className="font-copy text-2xl text-gray-base break-words font-normal">
                    Text component or Image component
                  </p>
                </SlideFullWidth>
              </Container>
            </SliderControls>
          </div>
        </Scaler>

        <h3 className="mb-10 font-semibold text-2xl"> Half</h3>
        <Scaler>
          <Container page={page.data} settings={settings.data}>
            <SlideTwoCols>
              <LeftCol>
                <p className="font-copy text-2xl text-gray-base break-words font-normal">
                  Text component
                </p>
              </LeftCol>
              <RightCol>
                <p className="font-copy text-2xl text-gray-base break-words font-normal">
                  Text or Image component
                </p>
              </RightCol>
            </SlideTwoCols>
          </Container>
        </Scaler>
        <h3 className="mb-10 font-semibold text-2xl"> 40/60</h3>
        <Scaler>
          <Container page={page.data} settings={settings.data}>
            <SlideTwoCols larger={"right"}>
              <LeftCol>
                <p className="font-copy text-2xl text-gray-base break-words font-normal">
                  Text component
                </p>
              </LeftCol>
              <RightCol>
                <p className="font-copy text-2xl text-gray-base break-words font-normal">
                  Text or Image component
                </p>
              </RightCol>
            </SlideTwoCols>
          </Container>
        </Scaler>
        <h3 className="mb-10 font-semibold text-2xl"> 60/40</h3>
        <Scaler>
          <Container page={page.data} settings={settings.data}>
            <SlideTwoCols larger={"left"}>
              <LeftCol>
                <p className="font-copy text-2xl text-gray-base break-words font-normal">
                  Text component
                </p>
              </LeftCol>
              <RightCol>
                <p className="font-copy text-2xl text-gray-base break-words font-normal">
                  Text or Image component
                </p>
              </RightCol>
            </SlideTwoCols>
          </Container>
        </Scaler>
        <h3 className="mb-10 font-semibold text-2xl"> 60/40 with overflow</h3>
        <Scaler>
          <Container page={page.data} settings={settings.data}>
            <SlideTwoCols overflowRight larger={"left"}>
              <LeftCol>
                <p className="font-copy text-2xl text-gray-base break-words font-normal">
                  Text component
                </p>
              </LeftCol>
              <RightCol>
                <p className="font-copy text-2xl text-gray-base break-words font-normal">
                  Text or Image component
                </p>
              </RightCol>
            </SlideTwoCols>
          </Container>
        </Scaler>

        <h3 className="mb-10 font-semibold text-2xl"> Cards </h3>
        <Scaler>
          <Container page={page.data} settings={settings.data}>
            <SlideFullWidth>
              {/* 4 columns */}
              <div className="h-full w-full flex flex-row gap-x-10 gap-y-4">
                <Card alternateAlignment />
                <Card alternateAlignment />
                <Card alternateAlignment />
                <Card alternateAlignment />
              </div>
            </SlideFullWidth>
          </Container>
        </Scaler>
      </div>
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
