import { GlobalPrismicRichText } from "@/components/GlobalPrismicRichText";
import { ValuePropositionSliceTwoColumnsWithDiagram } from "@/prismicio-types";
import { SlideTwoCols } from "@/components/Slides/SlideTwoCols";
import { LeftCol, RightCol } from "@/components/Slides/Columns";
import { Container } from "@/components/Slides/Container";
import { Context } from "../IntroSlide";
import { PrismicNextImage } from "@prismicio/next";

const TwoColsDiagram = ({
  slice,
  context,
}: {
  slice: ValuePropositionSliceTwoColumnsWithDiagram;
  context: Context;
}): JSX.Element => {
  return (
    <Container page={context.page} settings={context.settings}>
      <SlideTwoCols larger="left">
        <LeftCol className="flex flex-col gap-y-16 justify-center">
          <div className="flex flex-col gap-8">
            <GlobalPrismicRichText
              field={slice.primary.title}
            />
            <GlobalPrismicRichText
              field={slice.primary.description}
            />
          </div>
          <div>
            <PrismicNextImage field={slice.primary.diagram} />
          </div>
        </LeftCol>
        <RightCol className="flex flex-col justify-center">
          <PrismicNextImage field={slice.primary.image} />
        </RightCol>
      </SlideTwoCols>
    </Container>
  );
};

export default TwoColsDiagram;
