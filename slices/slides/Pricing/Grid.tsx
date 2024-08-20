import { PricingSliceEnterpriseGrid } from "@/prismicio-types";
import { Container } from "@/components/Slides/Container";
import { Context } from "@/utils/GlobalTypes";
import { GlobalPrismicRichText } from "@/components/GlobalPrismicRichText";
import { SlideFullWidth } from "@/components/Slides/SlideFullWidth";
import { Card } from "@/components/Card";
import { Headings } from "@/components/Slides/Headings";

const Grid = ({
  slice,
  context,
}: {
  slice: PricingSliceEnterpriseGrid;
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
        <div className="w-full h-full grid grid-rows-2 grid-cols-8 gap-4">
          {slice.primary.card.map((item, idx) => (
            <Card
              key={idx}
              className={`${
                idx === 0
                  ? "col-span-2 row-span-2"
                  : idx === 1
                    ? "col-span-4 col-start-3"
                    : idx === 2
                      ? "col-span-4 col-start-3 row-start-2"
                      : "col-span-2 row-span-2 col-start-7 row-start-1"
              }  bg-white justify-center`}
            >
              <GlobalPrismicRichText
                field={item.title}
                classNames="!text-3xl self-start mb-4"
              />
              <GlobalPrismicRichText
                field={item.description}
                theme={slice.primary.theme === "slider theme" ? context.page.theme : slice.primary.theme}
                classNames="text-xl"
              />
            </Card>
          ))}
        </div>
      </SlideFullWidth>
    </Container>
  );
};

export default Grid;
