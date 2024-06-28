import { LeftCol, RightCol } from "@/components/Slides/Columns";
import { Container } from "@/components/Slides/Container";
import { SlideTwoCols } from "@/components/Slides/SlideTwoCols";
import { ReferencesSlice } from "@/prismicio-types";
import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import { Context } from "../IntroSlide";
import { PrismicNextImage } from "@prismicio/next";
import { GlobalPrismicRichText } from "@/components/GlobalPrismicRichText";

/**
 * Props for `References`.
 */
export type ReferencesProps = SliceComponentProps<Content.ReferencesSlice>;

/**
 * Component for "References" Slices.
 */
const References = ({
  slice,
  context,
}: {
  slice: ReferencesSlice;
  context: Context;
}): JSX.Element => {
  return (
    <Container
      page={context.page}
      settings={context.settings}
      theme={slice.primary.theme}
    >
      {slice.variation === "default" ? (
        <SlideTwoCols>
          <LeftCol>
            <PrismicNextImage
              field={slice.primary.company_logo}
              className="h-52 w-52 object-contain"
            />
            <GlobalPrismicRichText
              field={slice.primary.description}
              classNames="!text-3xl"
              theme={slice.primary.theme}
            />
          </LeftCol>
          <RightCol>
            <GlobalPrismicRichText
              field={slice.primary.right_side_content}
              theme={slice.primary.theme}
            />
          </RightCol>
        </SlideTwoCols>
      ) : (
        <SlideTwoCols larger="left" overflowRight>
          <LeftCol>
            <PrismicNextImage
              field={slice.primary.company_logo}
              className="h-52 w-52 object-contain"
            />
            <GlobalPrismicRichText
              field={slice.primary.description}
              classNames="!text-3xl"
              theme={slice.primary.theme}
            />
          </LeftCol>
          <RightCol className="items-end">
            <PrismicNextImage
              field={slice.primary.image}
              className="w-full h-full object-contain"
            />
          </RightCol>
        </SlideTwoCols>
      )}
    </Container>
  );
};

export default References;
