import { GlobalPrismicRichText } from "@/components/GlobalPrismicRichText";
import { SlideFullWidth } from "@/components/Slides/SlideFullWidth";
import { LeadsGoalsSliceTextOnly } from "@/prismicio-types";
import { Container } from "@/components/Slides/Container";
import { Context } from "../IntroSlide";

const TextOnly = ({
  slice,
  context,
}: {
  slice: LeadsGoalsSliceTextOnly;
  context: Context;
}): JSX.Element => {
  return (
    <Container page={context.page} settings={context.settings}>
      <SlideFullWidth className="flex flex-col justify-center">
        <GlobalPrismicRichText field={slice.primary.title} />
        <GlobalPrismicRichText field={slice.primary.description} />
      </SlideFullWidth>
    </Container>
  );
};

export default TextOnly;
