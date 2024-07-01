import { Container } from "@/components/Slides/Container";
import { SalesProcessSlice } from "@/prismicio-types";
import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import { Context } from "../IntroSlide";
import { SlideFullWidth } from "@/components/Slides/SlideFullWidth";
import Timeline from "@/components/Timeline";

/**
 * Props for `SalesProcess`.
 */
export type SalesProcessProps = SliceComponentProps<Content.SalesProcessSlice>;

/**
 * Component for "SalesProcess" Slices.
 */
const SalesProcess = ({
  slice,
  context,
}: {
  slice: SalesProcessSlice;
  context: Context;
}): JSX.Element => {
  return (
    <Container
      page={context.page}
      settings={context.settings}
      theme={slice.primary.theme}
    >
      <SlideFullWidth className="flex flex-row justify-center">
        <Timeline planning={slice.primary.planning}/>
      </SlideFullWidth>
    </Container>
  );
};

export default SalesProcess;
