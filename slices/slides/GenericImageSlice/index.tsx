import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import { Context } from "@/utils/GlobalTypes";
import { Container } from "@/components/Slides/Container";
import { Headings } from "@/components/Slides/Headings";
import { SlideFullWidth } from "@/components/Slides/SlideFullWidth";
import { PrismicNextImage } from "@prismicio/next";
import { GenericImageSliceSliceDefault } from "@/prismicio-types";
import { GlobalPrismicRichText } from "@/components/GlobalPrismicRichText";

/**
 * Props for `GenericImageSlice`.
 */
export type GenericImageSliceProps =
  SliceComponentProps<Content.GenericImageSliceSlice>;

/**
 * Component for "GenericImageSlice" Slices.
 */
const GenericImageSlice = ({
  slice,
  context,
}: {
  slice: GenericImageSliceSliceDefault;
  context: Context;
}): JSX.Element => {
  return (
    <Container
      page={context.page}
      settings={context.settings}
      theme={
        slice.primary.theme === "slider theme" && context?.page?.theme
          ? context.page.theme
          : slice.primary.theme === "slider theme" && !context?.page?.theme
            ? "white"
            : slice.primary.theme
      }
    >
      <SlideFullWidth>
        <Headings
          eyebrow={slice.primary.eyebrow}
          title={slice.primary.title}
          alignTop
          titleSize="text-xl"
        />
        <PrismicNextImage
          field={slice.primary.image}
          width={1500}
          height={660}
          className={`${slice.primary.image_border && "border-2 border-gray-darker"} object-cover`}
        />
        <GlobalPrismicRichText
          field={slice.primary.description}
          theme={
            slice.primary.theme === "slider theme"
              ? context.page.theme
              : slice.primary.theme
          }
        />
      </SlideFullWidth>
    </Container>
  );
};

export default GenericImageSlice;
