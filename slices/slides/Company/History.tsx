import { GlobalPrismicRichText } from "@/components/GlobalPrismicRichText";
import { CompanySliceHistory } from "@/prismicio-types";
import { SlideTwoCols } from "@/components/Slides/SlideTwoCols";
import { LeftCol, RightCol } from "@/components/Slides/Columns";
import { Container } from "@/components/Slides/Container";
import { Context } from "../IntroSlide";
import { PrismicNextImage } from "@prismicio/next";
import { SlideFullWidth } from "@/components/Slides/SlideFullWidth";
import { Headings } from "@/components/Slides/Headings";

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
      theme={slice.primary.theme === "slider theme" ? context.page.theme : slice.primary.theme}
    >
      <SlideFullWidth>
        <Headings
          eyebrow={slice.primary.eyebrow}
          title={slice.primary.title}
          alignTop
        />
        <div className="grow object-contain">
          <PrismicNextImage
            field={slice.primary.image}
            className="h-full object-contain"
          />
        </div>
      </SlideFullWidth>
    </Container>
  );
};

export default History;
