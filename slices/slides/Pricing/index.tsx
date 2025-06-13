import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import { Context } from "@/utils/GlobalTypes";
import { PricingSlice } from "@/prismicio-types";
import FullWidth from "./FullWidth";
import Grid from "./Grid";
import Cards from "./Cards";
import TableImage from "./TableImage";
import Table from "./Table";

/**
 * Props for `Pricing`.
 */
export type PricingProps = SliceComponentProps<Content.PricingSlice>;

/**
 * Component for "Pricing" Slices.
 */
const Pricing = ({
  slice,
  context,
}: {
  slice: PricingSlice;
  context: Context;
}) => {
  switch (slice.variation) {
    case "default":
      return <FullWidth slice={slice} context={context} />;
    case "enterpriseCards":
      return <Cards slice={slice} context={context} />;
    case "tableImage":
      return <TableImage slice={slice} context={context} />;
    case "table":
      return <Table slice={slice} context={context} />;
    case "enterpriseGrid":
      return <Grid slice={slice} context={context} />;
  }
};

export default Pricing;
