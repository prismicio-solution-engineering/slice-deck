import { CompanySlice } from "@/prismicio-types";
import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import { Context } from "@/utils/GlobalTypes";
import Intro from "./Intro";
import History from "./History";
import KeyFiguresAndReferences from "./KeyFiguresAndReferences";
import FullWidthKeyFiguresGrid from "./FullWidthKeyFiguresGrid";

/**
 * Props for `Company`.
 */
export type CompanyProps = SliceComponentProps<Content.CompanySlice>;

/**
 * Component for "Company" Slices.
 */
const Company = ({
  slice,
  context,
}: {
  slice: CompanySlice;
  context: Context;
}): JSX.Element => {
  switch (slice.variation) {
    case "default":
      return <Intro slice={slice} context={context} />;
    case "history":
      return <History slice={slice} context={context} />;
    case "keyFiguresAndReferences":
      return <KeyFiguresAndReferences slice={slice} context={context} />;
    case "fullWidthKeyFigures":
      return <FullWidthKeyFiguresGrid slice={slice} context={context} />;
  }
};

export default Company;
