import { GlobalPrismicRichText } from "@/components/GlobalPrismicRichText";
import { ReferencesSliceTwoColsImage } from "@/prismicio-types";
import { Container } from "@/components/Slides/Container";
import { SlideTwoCols } from "@/components/Slides/SlideTwoCols";
import { LeftCol, RightCol } from "@/components/Slides/Columns";
import { PrismicNextImage } from "@prismicio/next";
import { Context } from "../IntroSlide";
import { Headings } from "@/components/Slides/Headings";

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
      theme={slice.primary.theme}
    >
      <SlideTwoCols className="items-center" larger="right">
        <LeftCol>
          <Headings
            eyebrow={slice.primary.eyebrow}
            title={slice.primary.title}
            alignLeft
            alignTop
          />
          <GlobalPrismicRichText
            field={slice.primary.description}
            companyName={context.page?.company_name!}
            theme={slice.primary.theme}
          />
        </LeftCol>
        <RightCol>
          <PrismicNextImage
            field={slice.primary.image}
            className="border-2 border-gray-darker shadow-xl"
          />
        </RightCol>
      </SlideTwoCols>
    </Container>
  );
};

export default WithImage;
