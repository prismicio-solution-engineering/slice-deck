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
          <div className="col-span-12 flex flex-row gap-x-8">
            {slice.primary.showcased_websites.slice(0, 4).map((item, idx) => (
              <PrismicNextImage
                key={idx}
                field={item.image}
                className="object-contain rounded-xl bg-white p-4 shadow-2xl"
              />
            ))}
          </div>
          <div className="grid grid-cols-subgrid row-span-1 col-span-12">
            <div className="col-span-3">
              {slice.primary.showcased_websites.slice(4, 5).map((item, idx) => (
                <PrismicNextImage
                  key={idx}
                  field={item.image}
                  className="object-contain rounded-xl bg-white p-4 shadow-2xl"
                />
              ))}
            </div>
            <div className="col-span-6 text-center">
              <div className="font-headings text-3xl font-semibold text-primary-pink text-center">
                {slice.primary.eyebrow}
              </div>
              <GlobalPrismicRichText
                field={slice.primary.title}
                classNames="text-center"
              />
            </div>
            <div className="col-span-3">
              {slice.primary.showcased_websites.slice(5, 6).map((item, idx) => (
                <PrismicNextImage
                  key={idx}
                  field={item.image}
                  className="object-contain rounded-xl bg-white p-4 shadow-2xl"
                />
              ))}
            </div>
          </div>
          <div className="col-span-12 flex flex-row gap-x-8">
            {slice.primary.showcased_websites.slice(6).map((item, idx) => (
              <PrismicNextImage
                key={idx}
                field={item.image}
                className="object-contain rounded-xl bg-white p-4 shadow-2xl"
              />
            ))}
          </div>
        </div>
      </SlideFullWidth>
    </Container>
  );
};

export default Intro;
