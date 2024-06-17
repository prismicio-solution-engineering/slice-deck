import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";

/**
 * Props for `IntroSlide`.
 */
export type IntroSlideProps = SliceComponentProps<Content.IntroSlideSlice>;

/**
 * Component for "IntroSlide" Slices.
 */
const IntroSlide = ({ slice }: IntroSlideProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      Placeholder component for intro_slide (variation: {slice.variation})
      Slices
    </section>
  );
};

export default IntroSlide;
