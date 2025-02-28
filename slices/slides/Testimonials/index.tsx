import { TestimonialDocument, TestimonialsSlice } from "@/prismicio-types";
import { Content, isFilled } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import { Context } from "@/utils/GlobalTypes";
import { Container } from "@/components/Slides/Container";
import { GlobalPrismicRichText } from "@/components/GlobalPrismicRichText";
import { SlideFullWidth } from "@/components/Slides/SlideFullWidth";
import { Card } from "@/components/Card";
import { PrismicNextImage } from "@prismicio/next";
import { createClient } from "@/prismicio";

/**
 * Props for `Testimonials`.
 */
export type TestimonialsProps = SliceComponentProps<Content.TestimonialsSlice>;

/**
 * Component for "Testimonials" Slices.
 */
const Testimonials = async ({
  slice,
  context,
}: {
  slice: TestimonialsSlice;
  context: Context;
}) => {
  const client = createClient();

  const linkedTestimonialUid: string | undefined =
    slice.variation === "linkedTestimonial" &&
    isFilled.contentRelationship(slice.primary.testimonial)
      ? slice.primary.testimonial.uid
      : "";

  const linkedTestimonial: TestimonialDocument | null = linkedTestimonialUid
    ? await client
        .getByUID<TestimonialDocument>("testimonial", linkedTestimonialUid)
        .catch(() => {
          console.log("no testimonial found");
          return null;
        })
    : null;

  const testimonial =
    slice.variation === "linkedTestimonial"
      ? linkedTestimonial?.data
      : slice.primary;

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
              field={testimonial!.author_picture}
              className="w-full h-full rounded-xl object-contain"
            />
          </Card>
          <Card className="w-1/2 rounded-xl bg-white justify-center gap-y-4">
            <GlobalPrismicRichText
              field={testimonial!.testimonial}
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
                {testimonial!.author_name}
              </p>
              <p
                className={`font-headings text-2xl text-gray-dark break-words font-normal mb-4 uppercase`}
              >
                {testimonial!.author_role_and_company}
              </p>
            </div>
          </Card>
        </div>
      </SlideFullWidth>
    </Container>
  );
};

export default Testimonials;
