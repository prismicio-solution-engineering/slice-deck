import { ValuePropositionSliceDefault } from "@/prismicio-types";
import { SlideTwoCols } from "@/components/Slides/SlideTwoCols";
import { LeftCol, RightCol } from "@/components/Slides/Columns";
import { Container } from "@/components/Slides/Container";
import { PrismicNextImage } from "@prismicio/next";
import { Context } from "@/utils/GlobalTypes";
import { Content } from "./Content";

const TwoCols = ({
  slice,
  context,
}: {
  slice: ValuePropositionSliceDefault;
  context: Context;
}): JSX.Element => {
  return (
    <Container
      page={context.page}
      settings={context.settings}
      theme={slice.primary.theme === "slider theme" ? context.page.theme : slice.primary.theme}
    >
      <SlideTwoCols overflowRight className="items-center">
        <LeftCol>
          <div className="font-headings text-3xl font-semibold text-primary-pink">
            {slice.primary.eyebrow}
          </div>
          <Content
            title={slice.primary.title}
            description={slice.primary.description}
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
