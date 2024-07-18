import { GlobalPrismicRichText } from "@/components/GlobalPrismicRichText";
import { ReferencesSliceDefault } from "@/prismicio-types";
import { SlideTwoCols } from "@/components/Slides/SlideTwoCols";
import { LeftCol, RightCol } from "@/components/Slides/Columns";
import { Container } from "@/components/Slides/Container";
import { Context } from "../IntroSlide";
import { PrismicNextImage } from "@prismicio/next";

const TwoColsText = ({
  slice,
  context,
}: {
  slice: ReferencesSliceDefault;
  context: Context;
}): JSX.Element => {
  return (
    <Container
      page={context.page}
      settings={context.settings}
      theme={slice.primary.theme}
    >
      <SlideTwoCols>
        <LeftCol>
          <PrismicNextImage
            field={slice.primary.company_logo}
            imgixParams={{
              monochrome: "AAAAAA",
            }}
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
    </Container>
  );
};

export default TwoColsText;
