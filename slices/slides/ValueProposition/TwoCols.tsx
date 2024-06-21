import { ValuePropositionSliceDefault } from "@/prismicio-types";
import { SlideTwoCols } from "@/components/Slides/SlideTwoCols";
import { LeftCol, RightCol } from "@/components/Slides/Columns";
import { Container } from "@/components/Slides/Container";
import { PrismicNextImage } from "@prismicio/next";
import { Context } from "../IntroSlide";
import { Content } from "./Content";

const TwoCols = ({
  slice,
  context,
}: {
  slice: ValuePropositionSliceDefault;
  context: Context;
}): JSX.Element => {
  return (
    <Container page={context.page} settings={context.settings}>
      <SlideTwoCols overflowRight className="items-center">
        <LeftCol>
          <Content
            title={slice.primary.title}
            description={slice.primary.description}
          />
        </LeftCol>
        <RightCol className="flex flex-col gap-y-16 justify-center items-end object-contain">
          <PrismicNextImage field={slice.primary.image} />
        </RightCol>
      </SlideTwoCols>
    </Container>
  );
};

export default TwoCols;
