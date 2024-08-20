import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import Intro from "./Intro";
import { MethodologySlice } from "@/prismicio-types";
import User from "./User";
import { Context } from "@/utils/GlobalTypes";

/**
 * Props for `Methodology`.
 */
export type MethodologyProps = SliceComponentProps<Content.MethodologySlice>;

/**
 * Component for "Methodology" Slices.
 */
const Methodology = ({
  slice,
  context,
}: {
  slice: MethodologySlice;
  context: Context;
}) => {
  switch (slice.variation) {
    case "default":
      return <Intro slice={slice} context={context} />;
    case "user":
      return <User slice={slice} context={context} />;
  }
};

export default Methodology;
