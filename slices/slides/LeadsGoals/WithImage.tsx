import { GlobalPrismicRichText } from "@/components/GlobalPrismicRichText";
import { LeadsGoalsSliceDefault } from "@/prismicio-types";
import { Container } from "@/components/Slides/Container";
import { SlideTwoCols } from "@/components/Slides/SlideTwoCols";
import { LeftCol, RightCol } from "@/components/Slides/Columns";
import { PrismicNextImage } from "@prismicio/next";
import { Context } from "../IntroSlide";

const WithImage = ({
  slice,
  context,
}: {
  slice: LeadsGoalsSliceDefault;
  context: Context;
}): JSX.Element => {
  return (
    <Container page={context.page} settings={context.settings}>
      <SlideTwoCols className="items-center">
        <LeftCol>
          <GlobalPrismicRichText field={slice.primary.title} />
          <GlobalPrismicRichText field={slice.primary.description} />
        </LeftCol>
        <RightCol>
          <PrismicNextImage field={slice.primary.image} />
        </RightCol>
      </SlideTwoCols>
    </Container>
  );
};

export default WithImage;
