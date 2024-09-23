import { ResourcesSlice } from "@/prismicio-types";
import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import { Context } from "@/utils/GlobalTypes";
import { Container } from "@/components/Slides/Container";
import { SlideFullWidth } from "@/components/Slides/SlideFullWidth";
import { GlobalPrismicRichText } from "@/components/GlobalPrismicRichText";
import { Contact } from "./Contact";
/**
 * Props for `Resources`.
 */
export type ResourcesProps = SliceComponentProps<Content.ResourcesSlice>;

/**
 * Component for "Resources" Slices.
 */
const Resources = ({
  slice,
  context,
}: {
  slice: ResourcesSlice;
  context: Context;
}) => {
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
      {/* {slice.variation === "default" ? (
        <SlideFullWidth className="flex flex-col justify-center">
          <GlobalPrismicRichText field={slice.primary.title} />
          <GlobalPrismicRichText
            field={slice.primary.content}
            theme={
              slice.primary.theme === "slider theme"
                ? context.page.theme
                : slice.primary.theme
            }
          />
        </SlideFullWidth>
      ) : ( */}
        <Contact slice={slice} context={context} />
      {/* )} */}
    </Container>
  );
};

export default Resources;
