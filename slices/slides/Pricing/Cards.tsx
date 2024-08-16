import { PricingSliceEnterpriseCards } from "@/prismicio-types";
import { Container } from "@/components/Slides/Container";
import { Context } from "../IntroSlide";
import { GlobalPrismicRichText } from "@/components/GlobalPrismicRichText";
import { SlideFullWidth } from "@/components/Slides/SlideFullWidth";
import { Card } from "@/components/Card";
import { Headings } from "@/components/Slides/Headings";

const Cards = ({
  slice,
  context,
}: {
  slice: PricingSliceEnterpriseCards;
  context: Context;
}): JSX.Element => {
  return (
    <Container
      page={context.page}
      settings={context.settings}
      theme={slice.primary.theme === "slider theme" ? context.page.theme : slice.primary.theme}
    >
      <SlideFullWidth>
        <Headings
          eyebrow={slice.primary.eyebrow}
          title={slice.primary.title}
          alignTop
        />
        <div className="h-full w-full flex flex-row gap-x-8">
          {slice.primary.card.map((item, idx) => (
            <Card
              key={idx}
              alternateAlignment
              className="h-5/6 w-1/4 bg-white border-4 border-gray-darker gap-y-8"
            >
              <GlobalPrismicRichText field={item.title} classNames="w-full text-xl" />
              <GlobalPrismicRichText
                field={item.description}
                theme={slice.primary.theme === "slider theme" ? context.page.theme : slice.primary.theme}
                classNames="w-full text-xl"
              />
            </Card>
          ))}
        </div>
      </SlideFullWidth>
    </Container>
  );
};

export default Cards;
