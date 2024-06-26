import { GlobalPrismicRichText } from "@/components/GlobalPrismicRichText";
import { MethodologySliceDefault } from "@/prismicio-types";
import { SlideTwoCols } from "@/components/Slides/SlideTwoCols";
import { LeftCol, RightCol } from "@/components/Slides/Columns";
import { Container } from "@/components/Slides/Container";
import { Context } from "../IntroSlide";
import { PrismicNextImage } from "@prismicio/next";

const Intro = ({
  slice,
  context,
}: {
  slice: MethodologySliceDefault;
  context: Context;
}): JSX.Element => {
  return (
    <Container page={context.page} settings={context.settings}>
      <SlideTwoCols overflowRight className="items-center">
        <LeftCol>
          <PrismicNextImage field={slice.primary.image} />
        </LeftCol>
        <RightCol>
          <GlobalPrismicRichText field={slice.primary.title} />
          <GlobalPrismicRichText
            field={slice.primary.description}
            classNames="!text-3xl mt-8"
          />
        </RightCol>
      </SlideTwoCols>
    </Container>
  );
};

export default Intro;
