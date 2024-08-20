import {
  IntroSlideSliceDefault,
  IntroSlideSliceSingleGroup,
} from "@/prismicio-types";
import { Container } from "@/components/Slides/Container";
import { Context } from "@/utils/GlobalTypes";
import { GlobalPrismicRichText } from "@/components/GlobalPrismicRichText";
import { SlideFullWidth } from "@/components/Slides/SlideFullWidth";

import ThreeGroups from "./ThreeGroups";
import SingleGroup from "./SingleGroup";

const SliderIntro = ({
  slice,
  context,
}: {
  slice: IntroSlideSliceDefault | IntroSlideSliceSingleGroup;
  context: Context;
}): JSX.Element => {
  return (
    <Container
      page={context.page}
      settings={context.settings}
      type={"company"}
      theme={slice.primary.theme === "slider theme" ? context.page.theme : slice.primary.theme}
    >
      <SlideFullWidth className="flex flex-col justify-evenly items-center">
        <div className="w-8/12 text-center flex flex-col gap-y-4 justify-center grow">
          <GlobalPrismicRichText field={slice.primary.title} />
          <GlobalPrismicRichText
            field={slice.primary.description}
            theme={slice.primary.theme === "slider theme" ? context.page.theme : slice.primary.theme}
          />
        </div>
        {slice.variation === "default" ? (
          <ThreeGroups slice={slice} />
        ) : (
          <SingleGroup slice={slice} />
        )}
      </SlideFullWidth>
    </Container>
  );
};

export default SliderIntro;
