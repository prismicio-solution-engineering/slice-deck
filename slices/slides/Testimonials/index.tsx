import { TestimonialsSlice } from "@/prismicio-types";
import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import { Context } from "@/utils/GlobalTypes";
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
      theme={
        slice.primary.theme === "slider theme" && context?.page?.theme
          ? context.page.theme
          : slice.primary.theme === "slider theme" && !context?.page?.theme
            ? "white"
            : slice.primary.theme
      }
    >
      <SlideFullWidth className="flex flex-col justify-center">
        <div className="w-full flex flex-row gap-x-8">
          <Card className="w-1/2 !p-0">
            <PrismicNextImage
              field={slice.primary.author_picture}
              className="w-full h-full rounded-xl object-contain"
            />
          </Card>
          <Card className="w-1/2 rounded-xl bg-white justify-center gap-y-4">
            <GlobalPrismicRichText
              field={slice.primary.testimonial}
              theme={
                slice.primary.theme === "slider theme"
                  ? context.page.theme
                  : slice.primary.theme
              }
              classNames="text-left text-4xl"
            />
            <div className="w-full">
              <p
                className={`font-copy text-2xl text-gray-dark break-words font-normal`}
              >
                {slice.primary.author_name}
              </p>
              <p
                className={`font-headings text-2xl text-gray-dark break-words font-normal mb-4 uppercase`}
              >
                {slice.primary.author_role_and_company}
              </p>
            </div>
          </Card>
        </div>
      </SlideFullWidth>
    </Container>
  );
};

export default Testimonials;
