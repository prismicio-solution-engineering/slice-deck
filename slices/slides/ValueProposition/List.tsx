import { ValuePropositionSliceWithList } from "@/prismicio-types";
import { SlideFullWidth } from "@/components/Slides/SlideFullWidth";
import { PrismicNextImage } from "@prismicio/next";
import { Container } from "@/components/Slides/Container";
import { Context } from "../IntroSlide";
import { GlobalPrismicRichText } from "@/components/GlobalPrismicRichText";
import { Card } from "@/components/Card";

const List = ({
  slice,
  context,
}: {
  slice: ValuePropositionSliceWithList;
  context: Context;
}): JSX.Element => {
  return (
    <Container
      page={context.page}
      settings={context.settings}
      theme={slice.primary.theme === "slider theme" ? context.page.theme : slice.primary.theme}
    >
      <SlideFullWidth className="items-center justify-evenly">
        <div className="text-center">
          <div className="font-headings text-3xl font-semibold text-primary-pink">
            {slice.primary.eyebrow}
          </div>
          <GlobalPrismicRichText field={slice.primary.title} />
          <GlobalPrismicRichText
            field={slice.primary.description}
            classNames="text-6xl"
          />
        </div>
        <div className="flex flex-row gap-x-32">
          {slice.primary.list.map((item, idx) => (
            <div key={idx} className="w-1/3 flex flex-col justify-between">
              <Card className="w-full h-full flex flex-col gap-y-8 text-center bg-white">
                <PrismicNextImage field={item.list_icon} />

                <div className="flex flex-col gap-y-8 grow">
                  <GlobalPrismicRichText
                    field={item.list_item}
                    theme={slice.primary.theme === "slider theme" ? context.page.theme : slice.primary.theme}
                  />
                </div>
              </Card>
            </div>
          ))}
        </div>
      </SlideFullWidth>
    </Container>
  );
};

export default List;
