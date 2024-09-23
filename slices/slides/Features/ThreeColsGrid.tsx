import {
  FeaturesSliceThreeColsGrid,
} from "@/prismicio-types";
import { Container } from "@/components/Slides/Container";
import { Context } from "@/utils/GlobalTypes";
import { PrismicNextLink } from "@prismicio/next";
import { GlobalPrismicRichText } from "@/components/GlobalPrismicRichText";
import { SlideFullWidth } from "@/components/Slides/SlideFullWidth";
import { isFilled } from "@prismicio/client";
import { Icon } from "@/components/Icon";
import { Card } from "@/components/Card";

const ThreeColsGrid = ({
  slice,
  context,
}: {
  slice: FeaturesSliceThreeColsGrid;
  context: Context;
}): JSX.Element => {
  return (
    <Container
      page={context.page}
      settings={context.settings}
      theme={
        slice.primary.theme === "slider theme" && context?.page?.theme
          ? context.page.theme
          : slice.primary.theme === "slider theme" && !context?.page?.theme
            ? "white"
            : slice.primary.theme
      }
    >
      <SlideFullWidth className="flex flex-row justify-center">
        <div className="font-headings text-3xl font-semibold text-primary-pink text-center">
          {slice.primary.eyebrow}
        </div>
        <GlobalPrismicRichText
          field={slice.primary.title}
          classNames="text-center"
        />
        <div className="grid grid-cols-3 gap-4">
          {slice.primary.features.map((item, idx) => (
            <PrismicNextLink
              field={item.feature_link}
              key={idx}
              className="w-full hover:-translate-y-2 ease-in-out duration-300"
            >
              <Card
                key={idx}
                className="w-full h-full flex !flex-row gap-x-4 justify-center bg-white"
              >
                <div className="w-max">
                  {isFilled.image(item.icon) && (
                    <Icon
                      src={item.icon.url}
                      size="md"
                      color={item.icon_color}
                      className="rounded-xl"
                      fallback={item.icon}
                    />
                  )}
                </div>
                <div>
                  <GlobalPrismicRichText
                    field={item.title}
                    classNames="!text-xl"
                  />
                  <GlobalPrismicRichText
                    field={item.description}
                    theme={slice.primary.theme === "slider theme" ? context.page.theme : slice.primary.theme}
                    classNames="!text-base"
                  />
                </div>
              </Card>
            </PrismicNextLink>
          ))}
        </div>
      </SlideFullWidth>
    </Container>
  );
};

export default ThreeColsGrid;
