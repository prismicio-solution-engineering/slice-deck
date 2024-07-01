import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import { Context } from "../IntroSlide";
import { PricingSlice } from "@/prismicio-types";
import { Container } from "@/components/Slides/Container";
import { LeftCol, RightCol } from "@/components/Slides/Columns";
import { SlideTwoCols } from "@/components/Slides/SlideTwoCols";

/**
 * Props for `Pricing`.
 */
export type PricingProps = SliceComponentProps<Content.PricingSlice>;

/**
 * Component for "Pricing" Slices.
 */
const Pricing = ({ slice, context }: {slice: PricingSlice, context: Context}): JSX.Element => {
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

export default Pricing;
