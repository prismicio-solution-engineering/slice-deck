"use client";
import { IntroSlideSlice } from "@/prismicio-types";
import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import SectionIntro from "./SectionIntro";
import SliderIntro from "./SliderIntro";
import { Context } from "@/utils/GlobalTypes";

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
}) => {
  switch (slice.variation) {
    case "default":
      return <SliderIntro slice={slice} context={context} />;
    case "singleGroup":
      return <SliderIntro slice={slice} context={context} />;
    case "sectionIntro":
      return <SectionIntro slice={slice} context={context} />;
  }
};

export default IntroSlide;
