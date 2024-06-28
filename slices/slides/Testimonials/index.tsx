import { TestimonialsSlice } from "@/prismicio-types";
import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import { Context } from "../IntroSlide";
import { Container } from "@/components/Slides/Container";
import { GlobalPrismicRichText } from "@/components/GlobalPrismicRichText";
import { SlideFullWidth } from "@/components/Slides/SlideFullWidth";
import { Card } from "@/components/Card";
import { PrismicNextImage } from "@prismicio/next";

/**
 * Props for `Testimonials`.
 */
export type TestimonialsProps = SliceComponentProps<Content.TestimonialsSlice>;

/**
 * Component for "Testimonials" Slices.
 */
const Testimonials = ({
  slice,
  context,
}: {
  slice: TestimonialsSlice;
  context: Context;
}): JSX.Element => {
  return (
    <Container
      page={context.page}
      settings={context.settings}
      theme={slice.primary.theme}
    >
      <SlideFullWidth className="flex flex-col justify-center">
        <div className="w-full grid grid-cols-3 gap-x-32 justify-center items-center">
          {slice.variation=== "default" && slice.primary.testimonials.map((item, idx) => (
            <Card
              key={idx}
              className="w-full h-full text-center rounded-2xl shadow-lg border-1 border-silver-base"
            >
              <PrismicNextImage
                field={item.author_picture}
                width={100}
                height={100}
                className="rounded-full mb-4"
              />

              <p className="font-headings text-xl text-gray-base break-words font-normal">
                {item.author_name}
              </p>
              <p className="font-copy text-lg text-gray-base break-words font-normal mb-4">
                {item.author_role_and_company}
              </p>
              <GlobalPrismicRichText
                field={item.testimonial}
                theme={slice.primary.theme}
              />
            </Card>
          ))}
        </div>
      </SlideFullWidth>
    </Container>
  );
};

export default Testimonials;
