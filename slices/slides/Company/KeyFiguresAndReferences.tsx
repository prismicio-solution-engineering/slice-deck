import { GlobalPrismicRichText } from "@/components/GlobalPrismicRichText";
import { CompanySliceKeyFiguresAndReferences } from "@/prismicio-types";
import { SlideTwoCols } from "@/components/Slides/SlideTwoCols";
import { LeftCol, RightCol } from "@/components/Slides/Columns";
import { Container } from "@/components/Slides/Container";
import { Context } from "../IntroSlide";
import { PrismicNextImage } from "@prismicio/next";
import { SlideFullWidth } from "@/components/Slides/SlideFullWidth";
import { Card } from "@/components/Card";
import { Headings } from "@/components/Slides/Headings";

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
        <Headings eyebrow={slice.primary.eyebrow} title={slice.primary.title} />
        <div className="w-full flex flex-row gap-x-8">
          <div className="w-1/3">
            <div className="grid grid-cols-2 gap-4">
              {slice.primary.figures.map((item, idx) => (
                <Card
                  key={idx}
                  className={`w-full h-full flex !flex-row gap-x-4 justify-center text-center bg-white bg-tertiary-${item.card_color}`}
                >
                  <div>
                    <GlobalPrismicRichText field={item.number} />
                    <GlobalPrismicRichText
                      field={item.description}
                      theme={slice.primary.theme}
                    />
                  </div>
                </Card>
              ))}
            </div>
          </div>
          <div className="flex items-end w-2/3">
            <div className="w-full grid grid-cols-2 grid-rows-2 gap-8">
              <div className="">
                <div className="border-b-2 border-gray-base font-copy text-xl uppercase mb-8">
                  {slice.primary.group_1_name}
                </div>
                {slice.primary.reference_group_1.map((item, idx) => (
                  <div
                    key={idx}
                    className="grid grid-cols-3 items-center gap-x-8"
                  >
                    <PrismicNextImage
                      field={item.logo}
                      className="object-left object-contain max-w-36 h-10 col-span-1"
                    />
                    <div className="col-span-2 text-left font-copy text-base">
                      {item.description}
                    </div>
                  </div>
                ))}
              </div>
              <div className="">
                <div className="border-b-2 border-gray-base font-copy text-xl uppercase mb-8">
                  {slice.primary.group_2_name}
                </div>
                {slice.primary.reference_group_2.map((item, idx) => (
                  <div
                    key={idx}
                    className="grid grid-cols-3 items-center gap-x-8"
                  >
                    <PrismicNextImage
                      field={item.logo}
                      className="object-left object-contain max-w-36 h-10 col-span-1"
                    />
                    <div className="col-span-2 text-left font-copy text-base">
                      {item.description}
                    </div>
                  </div>
                ))}
              </div>
              <div className="">
                <div className="border-b-2 border-gray-base font-copy text-xl uppercase mb-8">
                  {slice.primary.group_3_name}
                </div>
                {slice.primary.reference_group_3.map((item, idx) => (
                  <div
                    key={idx}
                    className="grid grid-cols-3 items-center gap-x-8"
                  >
                    <PrismicNextImage
                      field={item.logo}
                      className="object-left object-contain max-w-36 h-10 col-span-1"
                    />
                    <div className="col-span-2 text-left font-copy text-base">
                      {item.description}
                    </div>
                  </div>
                ))}
              </div>
              <div className="">
                <div className="border-b-2 border-gray-base font-copy text-xl uppercase mb-8">
                  {slice.primary.group_4_name}
                </div>
                {slice.primary.reference_group_4.map((item, idx) => (
                  <div
                    key={idx}
                    className="grid grid-cols-3 items-center gap-x-8"
                  >
                    <PrismicNextImage
                      field={item.logo}
                      className="object-left object-contain max-w-36 h-10 col-span-1"
                    />
                    <div className="col-span-2 text-left font-copy text-base">
                      {item.description}
                    </div>
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
