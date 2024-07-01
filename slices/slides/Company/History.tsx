import { GlobalPrismicRichText } from "@/components/GlobalPrismicRichText";
import {
  CompanySliceHistory,
} from "@/prismicio-types";
import { SlideTwoCols } from "@/components/Slides/SlideTwoCols";
import { LeftCol, RightCol } from "@/components/Slides/Columns";
import { Container } from "@/components/Slides/Container";
import { Context } from "../IntroSlide";
import { PrismicNextImage } from "@prismicio/next";
import { SlideFullWidth } from "@/components/Slides/SlideFullWidth";

const History = ({
  slice,
  context,
}: {
  slice: CompanySliceHistory;
  context: Context;
}): JSX.Element => {
  return (
    <Container
      page={context.page}
      settings={context.settings}
      theme={slice.primary.theme}
    >
      <SlideFullWidth>
        <div>Eyebrow and Title</div>
        <div>Image or graph</div>
        Numbers
      </SlideFullWidth>
    </Container>
  );
};

export default History;
