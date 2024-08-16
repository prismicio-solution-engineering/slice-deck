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
    <Container
      page={context.page}
      settings={context.settings}
      theme={slice.primary.theme === "slider theme" ? context.page.theme : slice.primary.theme}
    >
      <SlideTwoCols overflowRight className="items-center">
        <LeftCol>
          <div className="font-headings text-3xl font-semibold text-primary-pink">
            {slice.primary.eyebrow}
          </div>
          <GlobalPrismicRichText field={slice.primary.title} />
          <GlobalPrismicRichText
            field={slice.primary.description}
            theme={slice.primary.theme === "slider theme" ? context.page.theme : slice.primary.theme}
          />
        </LeftCol>
        <RightCol className="flex flex-col justify-center items-end object-contain">
          <PrismicNextImage field={slice.primary.image} />
        </RightCol>
      </SlideTwoCols>
    </Container>
  );
};

export default Product;
