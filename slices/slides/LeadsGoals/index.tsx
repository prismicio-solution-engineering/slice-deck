import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import WithImage from "./WithImage";
import TextOnly from "./TextOnly";
import { LeadsGoalsSlice } from "@/prismicio-types";
import { Context } from "../IntroSlide";

export const leadsGoalsComponents = {
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
 * Props for `LeadsGoals`.
 */
export type LeadsGoalsProps = SliceComponentProps<Content.LeadsGoalsSlice>;

/**
 * Component for "LeadsGoals" Slices.
 */
const LeadsGoals = ({
  slice,
  context,
}: {
  slice: LeadsGoalsSlice;
  context: Context;
}): JSX.Element => {
  switch (slice.variation) {
    case "default":
      return <WithImage slice={slice} context={context} />;
    case "textOnly":
      return <TextOnly slice={slice} context={context} />;
  }
};

export default LeadsGoals;
