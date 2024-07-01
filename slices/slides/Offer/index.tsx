import { Container } from "@/components/Slides/Container";
import { OfferSlice } from "@/prismicio-types";
import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import { Context } from "../IntroSlide";
import { SlideTwoCols } from "@/components/Slides/SlideTwoCols";
import { LeftCol, RightCol } from "@/components/Slides/Columns";

/**
 * Props for `Offer`.
 */
export type OfferProps = SliceComponentProps<Content.OfferSlice>;

/**
 * Component for "Offer" Slices.
 */
const Offer = ({
  slice,
  context,
}: {
  slice: OfferSlice;
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

export default Offer;
