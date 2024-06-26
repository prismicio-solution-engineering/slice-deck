"use client";
import { GlobalPrismicRichText } from "@/components/GlobalPrismicRichText";
import { Container } from "@/components/Slides/Container";
import { SlideFullWidth } from "@/components/Slides/SlideFullWidth";
import {
  DeckDocumentData,
  IntroSlideSlice,
  SettingsDocumentData,
} from "@/prismicio-types";
import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import ThreeGroups from "./ThreeGroups";
import SingleGroup from "./SingleGroup";

export const introComponents = {
  heading2: ({ children }: { children: React.ReactNode }) => (
    <h2
      className={`text-4xl font-headings font-medium text-gray-darker break-words`}
    >
      {children}
    </h2>
  ),
  paragraph: ({ children }: { children: React.ReactNode }) => (
    <p className="font-copy text-lg pb-1 text-gray-darker break-words font-normal">
      {children}
    </p>
    // <p className="font-copy text-2xl text-gray-base break-words font-normal">{children}</p>
  ),
};

export type Context = {
  page: DeckDocumentData;
  settings: SettingsDocumentData;
};

/**
 * Props for `IntroSlide`.
 */
export type IntroSlideProps = SliceComponentProps<Content.IntroSlideSlice>;

/**
 * Component for "IntroSlide" Slices.
 */
const IntroSlide = ({
  slice,
  context,
}: {
  slice: IntroSlideSlice;
  context: Context;
}): JSX.Element => {
  return (
    <Container page={context.page} settings={context.settings} type={"company"}>
      <SlideFullWidth className="flex flex-col justify-evenly items-center">
        <div className="w-8/12 text-center flex flex-col gap-y-4">
          <GlobalPrismicRichText field={slice.primary.title} />
          <GlobalPrismicRichText field={slice.primary.description} />
        </div>
        {slice.variation === "default" ? (
          <ThreeGroups slice={slice} />
        ) : (
          <SingleGroup slice={slice} />
        )}
      </SlideFullWidth>
    </Container>
  );
};

export default IntroSlide;
