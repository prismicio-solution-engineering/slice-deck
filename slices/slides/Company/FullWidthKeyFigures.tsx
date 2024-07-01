import { GlobalPrismicRichText } from "@/components/GlobalPrismicRichText";
import { CompanySliceFullWidthKeyFigures } from "@/prismicio-types";
import { SlideTwoCols } from "@/components/Slides/SlideTwoCols";
import { LeftCol, RightCol } from "@/components/Slides/Columns";
import { Container } from "@/components/Slides/Container";
import { Context } from "../IntroSlide";
import { PrismicNextImage } from "@prismicio/next";
import { SlideFullWidth } from "@/components/Slides/SlideFullWidth";

const FullWidthKeyFigures = ({
  slice,
  context,
}: {
  slice: CompanySliceFullWidthKeyFigures;
  context: Context;
}): JSX.Element => {
  return (
    <Container
      page={context.page}
      settings={context.settings}
      theme={slice.primary.theme}
    >
      <SlideFullWidth>
        Cards
        <div>Logos width 2/3</div>
      </SlideFullWidth>
    </Container>
  );
};

export default FullWidthKeyFigures;
