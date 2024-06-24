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
    <Container page={context.page} settings={context.settings}>
      {slice.variation === "default" ? 
      <SlideTwoCols>
        <LeftCol>
          <PrismicNextImage
            field={slice.primary.company_logo}
            className="h-52 w-52 object-contain"
          />
          <GlobalPrismicRichText
            field={slice.primary.description}
            components={{
              paragraph: ({ children }) => (
                <p className="font-copy text-3xl mb-2 text-gray-darker break-words font-normal">
                  {children}
                </p>
              ),
            }}
          />
        </LeftCol>
        <RightCol>
            <GlobalPrismicRichText field={slice.primary.right_side_content} />
        </RightCol>
      </SlideTwoCols>
      :
      <SlideTwoCols larger="left" overflowRight>
        <LeftCol>
          <PrismicNextImage
            field={slice.primary.company_logo}
            className="h-52 w-52 object-contain"
          />
          <GlobalPrismicRichText
            field={slice.primary.description}
            components={{
              paragraph: ({ children }) => (
                <p className="font-copy text-3xl mb-2 text-gray-darker break-words font-normal">
                  {children}
                </p>
              ),
            }}
          />
        </LeftCol>
        <RightCol className="items-end">
            <PrismicNextImage field={slice.primary.image} className="w-full h-full object-contain"/>
        </RightCol>
      </SlideTwoCols>
      }
    </Container>
  );
};

export default References;
