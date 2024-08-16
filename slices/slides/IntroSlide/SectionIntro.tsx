import { IntroSlideSliceSectionIntro } from "@/prismicio-types";
import { Container } from "@/components/Slides/Container";
import { Context } from ".";
import { GlobalPrismicRichText } from "@/components/GlobalPrismicRichText";
import { SlideFullWidth } from "@/components/Slides/SlideFullWidth";

import ThreeGroups from "./ThreeGroups";
import SingleGroup from "./SingleGroup";
import { LeftCol, RightCol } from "@/components/Slides/Columns";
import { SlideTwoCols } from "@/components/Slides/SlideTwoCols";
import { PrismicNextImage } from "@prismicio/next";

const SectionIntro = ({
  slice,
  context,
}: {
  slice: IntroSlideSliceSectionIntro;
  context: Context;
}): JSX.Element => {
  return (
    <Container
      page={context.page}
      settings={context.settings}
      theme={slice.primary.theme === "slider theme" ? context.page.theme : slice.primary.theme}
    >
      <SlideTwoCols className="items-center">
        <LeftCol>
          <div className="font-headings text-3xl font-semibold text-primary-pink">
            {slice.primary.eyebrow}
          </div>
          <GlobalPrismicRichText
            field={slice.primary.title}
            companyName={context.page?.company_name!}
          />
          <GlobalPrismicRichText
            field={slice.primary.description}
            companyName={context.page?.company_name!}
            theme={slice.primary.theme === "slider theme" ? context.page.theme : slice.primary.theme}
            classNames="w-full"
          />
        </LeftCol>
        <RightCol>
          <div className="relative w-full h-full">
            <PrismicNextImage
              field={slice.primary.illustration}
              className={`w-[500px] absolute inset-0 top-1/3 left-16 z-10`}
            />
            <div
              className={`w-3/4 h-full ml-auto bg-tertiary-${slice.primary.illustration_background_color} border-2 border-gray-darker`}
            />
          </div>
        </RightCol>
      </SlideTwoCols>
    </Container>
  );
};

export default SectionIntro;
