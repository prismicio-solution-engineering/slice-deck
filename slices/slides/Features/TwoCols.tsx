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
    <Container
      page={context.page}
      settings={context.settings}
      theme={slice.primary.theme === "slider theme" ? context.page.theme : slice.primary.theme}
    >
      <SlideTwoCols overflowRight>
        <LeftCol>
          <div className="font-headings text-3xl font-semibold text-primary-pink">
            {slice.primary.eyebrow}
          </div>
          <Content
            title={slice.primary.title}
            description={slice.primary.content}
            theme={slice.primary.theme === "slider theme" ? context.page.theme : slice.primary.theme}
          />
        </LeftCol>
        <RightCol>
          <PrismicNextImage
            field={slice.primary.image}
            className="w-full h-full object-contain"
          />
        </RightCol>
      </SlideTwoCols>
    </Container>
  );
};

export default TwoCols;
