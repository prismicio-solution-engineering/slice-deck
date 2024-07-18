import { ReferencesSlice } from "@/prismicio-types";
import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import { Context } from "../IntroSlide";
import TwoColsText from "./TwoColsText";
import WithImageGrid from "./WithImageGrid";
import ShowcasedWebsites from "./ShowcasedWebsites";
import G2Badges from "./G2Badges";
import WithImage from "./WithImage";

/**
 * Props for `References`.
 */
export type ReferencesProps = SliceComponentProps<Content.ReferencesSlice>;

/**
 * Component for "References" Slices.
 */
const References = ({
  slice,
  context,
}: {
  slice: ReferencesSlice;
  context: Context;
}) => {
  switch (slice.variation) {
    case "default":
      return <TwoColsText slice={slice} context={context} />;
    case "withImage":
      return <WithImageGrid slice={slice} context={context} />;
    case "showcasedWebsites":
      return <ShowcasedWebsites slice={slice} context={context} />;
    case "g2Badges":
      return <G2Badges slice={slice} context={context} />;
    case "twoColsImage":
      return <WithImage slice={slice} context={context} />;
  }
};

export default References;
