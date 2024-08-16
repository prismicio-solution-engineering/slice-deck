import { Container } from "@/components/Slides/Container";
import { SalesProcessSlice } from "@/prismicio-types";
import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import { Context } from "../IntroSlide";
import { SlideFullWidth } from "@/components/Slides/SlideFullWidth";
import Timeline from "@/components/Timeline";
import { Headings } from "@/components/Slides/Headings";

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
      theme={slice.primary.theme === "slider theme" ? context.page.theme : slice.primary.theme}
    >
      <SlideFullWidth className="flex flex-col justify-between">
        <Headings
          eyebrow={slice.primary.eyebrow}
          title={slice.primary.title}
          alignTop
        />
        <div className="w-full grow">
          <Timeline planning={slice.primary.planning} />
        </div>
      </SlideFullWidth>
    </Container>
  );
};

export default SalesProcess;
