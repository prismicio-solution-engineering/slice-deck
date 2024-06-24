import { FeaturesSliceDefault } from "@/prismicio-types";
import { SlideTwoCols } from "@/components/Slides/SlideTwoCols";
import { LeftCol, RightCol } from "@/components/Slides/Columns";
import { Container } from "@/components/Slides/Container";
import { Context } from "../IntroSlide";
import { PrismicNextImage } from "@prismicio/next";
import { Content } from "../ValueProposition/Content";

const TwoCols = ({
  slice,
  context,
}: {
  slice: FeaturesSliceDefault;
  context: Context;
}): JSX.Element => {
  return (
    <Container page={context.page} settings={context.settings}>
      <SlideTwoCols>
        <LeftCol>
          <Content
            title={slice.primary.title}
            description={slice.primary.content}
          />
        </LeftCol>
        <RightCol>
          <PrismicNextImage field={slice.primary.image} />
        </RightCol>
      </SlideTwoCols>
    </Container>
  );
};

export default TwoCols;
