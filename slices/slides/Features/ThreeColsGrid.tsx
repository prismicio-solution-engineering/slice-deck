import {
  FeaturesSliceDefault,
  FeaturesSliceThreeColsGrid,
  FeaturesSliceThreeColsList,
} from "@/prismicio-types";
import { SlideTwoCols } from "@/components/Slides/SlideTwoCols";
import { LeftCol, RightCol } from "@/components/Slides/Columns";
import { Container } from "@/components/Slides/Container";
import { Context } from "../IntroSlide";
import { PrismicNextImage, PrismicNextLink } from "@prismicio/next";
import { Content } from "../ValueProposition/Content";
import { GlobalPrismicRichText } from "@/components/GlobalPrismicRichText";
import { Button } from "@/components/Button";
import { SlideFullWidth } from "@/components/Slides/SlideFullWidth";

const ThreeColsGrid = ({
  slice,
  context,
}: {
  slice: FeaturesSliceThreeColsGrid;
  context: Context;
}): JSX.Element => {
  return (
    <Container page={context.page} settings={context.settings}>
      <SlideFullWidth className="flex flex-row justify-center">
      <GlobalPrismicRichText field={slice.primary.title} />
      <div className="grid grid-cols-3 gap-4">
        {slice.primary.features.map((item, idx) => (
          <PrismicNextLink field={item.feature_link} key={idx} className="w-full border border-silver-base shadow-md rounded-2xl p-4 text-center hover:-translate-y-2 ease-in-out duration-300">
            <GlobalPrismicRichText field={item.title} />
            <GlobalPrismicRichText field={item.description} />
          </PrismicNextLink>
        ))}
        </div>
      </SlideFullWidth>
    </Container>
  );
};

export default ThreeColsGrid;
