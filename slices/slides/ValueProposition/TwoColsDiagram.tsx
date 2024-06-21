import { ValuePropositionSliceTwoColumnsWithDiagram } from "@/prismicio-types";
import { SlideTwoCols } from "@/components/Slides/SlideTwoCols";
import { LeftCol, RightCol } from "@/components/Slides/Columns";
import { Container } from "@/components/Slides/Container";
import { Context } from "../IntroSlide";
import { PrismicNextImage } from "@prismicio/next";
import { Content } from "./Content";

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
        <LeftCol >
          <Content
            title={slice.primary.title}
            description={slice.primary.description}
          />
          <PrismicNextImage field={slice.primary.diagram} className="mt-16"/>
        </LeftCol>
        <RightCol>
          <PrismicNextImage field={slice.primary.image} />
        </RightCol>
      </SlideTwoCols>
    </Container>
  );
};

export default TwoColsDiagram;
