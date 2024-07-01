import { GlobalPrismicRichText } from "@/components/GlobalPrismicRichText";
import { CompanySliceKeyFiguresAndReferences } from "@/prismicio-types";
import { SlideTwoCols } from "@/components/Slides/SlideTwoCols";
import { LeftCol, RightCol } from "@/components/Slides/Columns";
import { Container } from "@/components/Slides/Container";
import { Context } from "../IntroSlide";
import { PrismicNextImage } from "@prismicio/next";
import { SlideFullWidth } from "@/components/Slides/SlideFullWidth";
import { Card } from "@/components/Card";

const KeyFiguresAndReferences = ({
  slice,
  context,
}: {
  slice: CompanySliceKeyFiguresAndReferences;
  context: Context;
}): JSX.Element => {
  return (
    <Container
      page={context.page}
      settings={context.settings}
      theme={slice.primary.theme}
    >
      <SlideFullWidth>
        <div className="font-headings text-3xl font-semibold text-primary-pink text-center">
          {slice.primary.eyebrow}
        </div>
        <GlobalPrismicRichText
          field={slice.primary.title}
          classNames="text-center"
        />
        <div className="w-full flex flex-row gap-x-8">
          <div className="w-1/3">
            <div className="grid grid-cols-2 gap-4">
              {slice.primary.figures.map((item, idx) => (
                <Card
                  key={idx}
                  className={`w-full h-full flex !flex-row gap-x-4 justify-center bg-tertiary-${item.card_color}`}
                >
                  <div>
                    <GlobalPrismicRichText
                      field={item.number}
                      classNames="!text-xl"
                    />
                    <GlobalPrismicRichText
                      field={item.description}
                      theme={slice.primary.theme}
                      classNames="!text-base"
                    />
                  </div>
                </Card>
              ))}
            </div>
          </div>
          <div className="flex items-center w-2/3">
          <div className="w-full grid grid-cols-2 grid-rows-2 gap-8">
            <div className="">
              <div className="border-b-2 border-gray-base font-copy text-xl uppercase">
                {slice.primary.group_1_name}
              </div>
              {slice.primary.reference_group_1.map((item, idx) => (
                <div key={idx} className="flex flex-row">
                  <PrismicNextImage field={item.logo} className="w-1/3" />
                  <div className="w-2/3">{item.description}</div>
                </div>
              ))}
            </div>
            <div className="">
              <div className="border-b-2 border-gray-base font-copy text-xl uppercase">
                {slice.primary.group_2_name}
              </div>
              {slice.primary.reference_group_2.map((item, idx) => (
                <div key={idx} className="flex flex-row">
                  <PrismicNextImage field={item.logo} className="w-1/3" />
                  <div className="w-2/3">{item.description}</div>
                </div>
              ))}
            </div>
            <div className="">
              <div className="border-b-2 border-gray-base font-copy text-xl uppercase">
                {slice.primary.group_3_name}
              </div>
              {slice.primary.reference_group_3.map((item, idx) => (
                <div key={idx} className="flex flex-row">
                  <PrismicNextImage field={item.logo} className="w-1/3" />
                  <div className="w-2/3">{item.description}</div>
                </div>
              ))}
            </div>
            <div className="">
              <div className="border-b-2 border-gray-dark font-copy text-xl uppercase">
                {slice.primary.group_4_name}
              </div>
              {slice.primary.reference_group_4.map((item, idx) => (
                <div key={idx} className="flex flex-row">
                  <PrismicNextImage field={item.logo} className="w-1/3" />
                  <div className="w-2/3">{item.description}</div>
                </div>
              ))}
            </div>
          </div>
          </div>
        </div>
      </SlideFullWidth>
    </Container>
  );
};

export default KeyFiguresAndReferences;
