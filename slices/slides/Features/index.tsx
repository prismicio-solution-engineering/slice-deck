import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import TwoCols from "./TwoCols";
import ThreeColsList from "./ThreeColsList";
import ThreeColsGrid from "./ThreeColsGrid";
import { FeaturesSlice } from "@/prismicio-types";
import { Context } from "../IntroSlide";

/**
 * Props for `Features`.
 */
export type FeaturesProps = SliceComponentProps<Content.FeaturesSlice>;

/**
 * Component for "Features" Slices.
 */
const Features = ({
  slice,
  context,
}: {
  slice: FeaturesSlice;
  context: Context;
}): JSX.Element => {
  switch (slice.variation) {
    case "default":
      return <TwoCols slice={slice} context={context} />;
    case "threeColsList":
      return <ThreeColsList slice={slice} context={context} />;
    case "threeColsGrid":
      return <ThreeColsGrid slice={slice} context={context} />;
  }
};

export default Features;
