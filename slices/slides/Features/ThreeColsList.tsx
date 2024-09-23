import { FeaturesSliceThreeColsList } from "@/prismicio-types";
import { Container } from "@/components/Slides/Container";
import { Context } from "@/utils/GlobalTypes";
import { GlobalPrismicRichText } from "@/components/GlobalPrismicRichText";
import { Button } from "@/components/Button";
import { SlideFullWidth } from "@/components/Slides/SlideFullWidth";
import { Card } from "@/components/Card";
import { isFilled } from "@prismicio/client";
import { Icon } from "@/components/Icon";

const ThreeColsList = ({
  slice,
  context,
}: {
  slice: FeaturesSliceThreeColsList;
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
      <SlideFullWidth className="flex flex-row justify-center items-center">
        <div className="font-headings text-3xl font-semibold text-primary-pink">
          {slice.primary.eyebrow}
        </div>
        <GlobalPrismicRichText field={slice.primary.title} />
        <div className="flex flex-row gap-x-32">
          {slice.primary.features.map((item, idx) => (
            <div key={idx} className="w-1/3 flex flex-col justify-between">
              <Card
                key={idx}
                className="w-full h-full flex flex-col gap-y-8 text-center bg-white"
              >
                {isFilled.image(item.icon) && (
                  <Icon
                    src={item.icon.url}
                    size="lg"
                    color={item.icon_color}
                    className="rounded-xl"
                    fallback={item.icon}
                  />
                )}
                <div className="flex flex-col gap-y-8 grow">
                  <GlobalPrismicRichText field={item.title} />
                  <GlobalPrismicRichText
                    field={item.description}
                    theme={slice.primary.theme === "slider theme" ? context.page.theme : slice.primary.theme}
                  />
                </div>
                <Button
                  variant="link"
                  field={item.cta_link}
                  className="text-primary-pink"
                >
                  {item.cta_label}
                </Button>
              </Card>
            </div>
          ))}
        </div>
      </SlideFullWidth>
    </Container>
  );
};

export default ThreeColsList;
