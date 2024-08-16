import { ValuePropositionSlice } from "@/prismicio-types";
import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import TwoCols from "./TwoCols";
import TwoColsDiagram from "./TwoColsDiagram";
import TwoColsLogos from "./TwoColsLogos";
import List from "./List";
import { Context } from "../IntroSlide";

/**
 * Props for `ValueProposition`.
 */
export type ValuePropositionProps =
  SliceComponentProps<Content.ValuePropositionSlice>;

/**
 * Component for "ValueProposition" Slices.
 */
const ValueProposition = ({
  slice,
  context,
}: {
  slice: ValuePropositionSlice;
  context: Context;
}) => {
  switch (slice.variation) {
    case "default":
      return <TwoCols slice={slice} context={context} />;
    case "twoColumnsWithLogos":
      return <TwoColsLogos slice={slice} context={context} />;
    case "withList":
      return <List slice={slice} context={context} />;
  }
};

export default ValueProposition;
