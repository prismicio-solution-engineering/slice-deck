import { GlobalPrismicRichText } from "@/components/GlobalPrismicRichText";
import { ReferencesSliceTwoColsImage } from "@/prismicio-types";
import { Container } from "@/components/Slides/Container";
import { SlideTwoCols } from "@/components/Slides/SlideTwoCols";
import { LeftCol, RightCol } from "@/components/Slides/Columns";
import { PrismicNextImage } from "@prismicio/next";
import { Context } from "@/utils/GlobalTypes";
import { Headings } from "@/components/Slides/Headings";
import { SlideImage } from "@/components/Slides/SlideImage";

const WithImage = ({
  slice,
  context,
}: {
  slice: ReferencesSliceTwoColsImage;
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
      <SlideTwoCols className="items-center" larger="right">
        <LeftCol>
          <PrismicNextImage
            field={slice.primary.company_logo}
            imgixParams={{
              monochrome: "AAAAAA",
            }}
            className="max-h-20 max-w-32  object-contain my-4"
          />
          <Headings
            eyebrow={slice.primary.eyebrow}
            title={slice.primary.title}
            alignLeft
            alignTop
          />
          <GlobalPrismicRichText
            field={slice.primary.description}
            companyName={context.page?.company_name!}
            theme={
              slice.primary.theme === "slider theme"
                ? context.page.theme
                : slice.primary.theme
            }
          />
          <GlobalPrismicRichText
            field={slice.primary.bottom_content}
            companyName={context.page?.company_name!}
            theme={
              slice.primary.theme === "slider theme"
                ? context.page.theme
                : slice.primary.theme
            }
            classNames="text-xl mt-8"
          />
        </LeftCol>
        <RightCol>
          <SlideImage
            field={slice.primary.image}
            className="shadow-xl"
            cover
            larger="right"
            border={slice.primary.image_border}
          />
        </RightCol>
      </SlideTwoCols>
    </Container>
  );
};

export default WithImage;
