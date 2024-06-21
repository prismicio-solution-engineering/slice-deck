import { Container } from "@/components/Slides/Container";
import { ProductSlice } from "@/prismicio-types";
import { SliceComponentProps } from "@prismicio/react";
import { Context } from "../IntroSlide";
import { PrismicNextImage } from "@prismicio/next";
import { LeftCol, RightCol } from "@/components/Slides/Columns";
import { SlideTwoCols } from "@/components/Slides/SlideTwoCols";
import { GlobalPrismicRichText } from "@/components/GlobalPrismicRichText";

/**
 * Props for `Product`.
 */
export type ProductProps = SliceComponentProps<ProductSlice>;

/**
 * Component for "Product" Slices.
 */
const Product = ({
  slice,
  context,
}: {
  slice: ProductSlice;
  context: Context;
}): JSX.Element => {
  return (
    <Container page={context.page} settings={context.settings}>
      <SlideTwoCols overflowRight className="items-center">
        <LeftCol className="flex flex-col gap-y-8 justify-center">
          <GlobalPrismicRichText field={slice.primary.title} />
          <GlobalPrismicRichText field={slice.primary.description} />
        </LeftCol>
        <RightCol className="flex flex-col justify-center items-end object-contain">
          <PrismicNextImage field={slice.primary.image} />
        </RightCol>
      </SlideTwoCols>
    </Container>
  );
};

export default Product;
