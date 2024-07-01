import { GlobalPrismicRichText } from "@/components/GlobalPrismicRichText";
import { ReferencesSliceShowcasedWebsites } from "@/prismicio-types";
import { SlideTwoCols } from "@/components/Slides/SlideTwoCols";
import { LeftCol, RightCol } from "@/components/Slides/Columns";
import { Container } from "@/components/Slides/Container";
import { Context } from "../IntroSlide";
import { PrismicNextImage } from "@prismicio/next";
import { SlideFullWidth } from "@/components/Slides/SlideFullWidth";

const ShowcasedWebsites = ({
  slice,
  context,
}: {
  slice: ReferencesSliceShowcasedWebsites;
  context: Context;
}): JSX.Element => {
  return (
    <Container
      page={context.page}
      settings={context.settings}
      theme={slice.primary.theme}
    >
<SlideFullWidth>
  toto
</SlideFullWidth>
    </Container>
  );
};

export default ShowcasedWebsites;
