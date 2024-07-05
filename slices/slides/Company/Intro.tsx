import { GlobalPrismicRichText } from "@/components/GlobalPrismicRichText";
import { CompanySliceDefault } from "@/prismicio-types";
import { Container } from "@/components/Slides/Container";
import { Context } from "../IntroSlide";
import { PrismicNextImage } from "@prismicio/next";
import { SlideFullWidth } from "@/components/Slides/SlideFullWidth";

const Intro = ({
  slice,
  context,
}: {
  slice: CompanySliceDefault;
  context: Context;
}): JSX.Element => {
  return (
    <Container
      page={context.page}
      settings={context.settings}
      theme={slice.primary.theme}
    >
      <SlideFullWidth>
        <div className="grid grid-rows-3 grid-cols-12 gap-y-8 gap-x-4">
          <div className="col-span-12 flex flex-row gap-x-8 -mx-28 -mt-4">
            {slice.primary.showcased_websites.slice(0, 4).map((item, idx) => (
              <div key={idx} className="h-60 shadow-2xl p-4 bg-white rounded-2xl object-contain">
                <PrismicNextImage
                  field={item.image}
                  className="h-full w-full object-contain"
                />
              </div>
            ))}
          </div>
          <div className="flex flex-row col-span-12 gap-x-8 -mx-32">
            <div>
              {slice.primary.showcased_websites.slice(4, 5).map((item, idx) => (
                <div key={idx} className="h-60 shadow-2xl p-4 bg-white rounded-2xl object-contain">
                  <PrismicNextImage
                    field={item.image}
                    className="h-full w-full object-contain"
                  />
                </div>
              ))}
            </div>
            <div className="w-2/3 self-center text-center">
              <div className="font-headings text-3xl font-semibold text-primary-pink text-center">
                {slice.primary.eyebrow}
              </div>
              <GlobalPrismicRichText
                field={slice.primary.title}
                classNames="text-center"
              />
            </div>
            <div>
              {slice.primary.showcased_websites.slice(5, 6).map((item, idx) => (
                <div key={idx} className="h-60 shadow-2xl p-4 bg-white rounded-2xl object-contain">
                  <PrismicNextImage
                    field={item.image}
                    className="h-full w-full object-contain"
                  />
                </div>
              ))}
            </div>
          </div>
          <div className="col-span-12 flex flex-row gap-x-8 -mx-40 mt-4">
            {slice.primary.showcased_websites.slice(6).map((item, idx) => (
              <div key={idx} className="h-60 shadow-2xl p-4 bg-white rounded-2xl object-contain">
                <PrismicNextImage
                  field={item.image}
                  className="h-full w-full object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </SlideFullWidth>
    </Container>
  );
};

export default Intro;
