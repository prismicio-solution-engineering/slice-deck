import { GlobalPrismicRichText } from "@/components/GlobalPrismicRichText";
import { CompanySliceFullWidthKeyFigures } from "@/prismicio-types";
import { SlideTwoCols } from "@/components/Slides/SlideTwoCols";
import { LeftCol, RightCol } from "@/components/Slides/Columns";
import { Container } from "@/components/Slides/Container";
import { Context } from "../IntroSlide";
import { PrismicNextImage } from "@prismicio/next";
import { SlideFullWidth } from "@/components/Slides/SlideFullWidth";
import { Card } from "@/components/Card";
import { Headings } from "@/components/Slides/Headings";

const FullWidthKeyFiguresGrid = ({
  slice,
  context,
}: {
  slice: CompanySliceFullWidthKeyFigures;
  context: Context;
}): JSX.Element => {
  return (
    <Container
      page={context.page}
      settings={context.settings}
      theme={slice.primary.theme}
    >
      <SlideFullWidth className="flex flex-row">
        <div className="flex flex-col justify-center grow">
          <Headings
            eyebrow={slice.primary.eyebrow}
            title={slice.primary.title}
            alignTop
          />
          <div className="grid grid-cols-4 grid-rows-2 gap-x-4 gap-y-4">
            {slice.primary.figures.map((item, idx) => (
              <Card
                key={idx}
                className="w-full h-32 flex !flex-row gap-x-4 justify-center bg-white text-center"
              >
                <div>
                  <GlobalPrismicRichText
                    field={item.number}
                    classNames={`text-4xl text-primary-${item.card_color} !font-bold`}
                  />
                  <GlobalPrismicRichText
                    field={item.description}
                    theme={slice.primary.theme}
                    classNames="text-4xl"
                  />
                </div>
              </Card>
            ))}
          </div>
        </div>
        <div className="w-full flex flex-row justify-around gap-x-8">
          {slice.primary.logos.map((item, idx) => (
            <PrismicNextImage
              key={idx}
              field={item.logo}
              imgixParams={{
                monochrome: "AAAAAA",
              }}
              className="object-contain h-10"
            />
          ))}
        </div>
      </SlideFullWidth>
    </Container>
  );
};

export default FullWidthKeyFiguresGrid;
