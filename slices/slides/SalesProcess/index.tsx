import { LeftCol, RightCol } from "@/components/Slides/Columns";
import { Container } from "@/components/Slides/Container";
import { SlideTwoCols } from "@/components/Slides/SlideTwoCols";
import { SalesProcessSlice } from "@/prismicio-types";
import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import { Context } from "../IntroSlide";

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
      <SlideTwoCols larger="right" overflowRight className="mb-0">
        <LeftCol>toto</LeftCol>
        <RightCol>Tutu</RightCol>
      </SlideTwoCols>
    </Container>
  );
};

export default SalesProcess;
