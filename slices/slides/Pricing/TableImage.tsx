import { PricingSliceTableImage } from "@/prismicio-types";
import { Container } from "@/components/Slides/Container";
import { Context } from "@/utils/GlobalTypes";
import { GlobalPrismicRichText } from "@/components/GlobalPrismicRichText";
import { SlideFullWidth } from "@/components/Slides/SlideFullWidth";
import { Headings } from "@/components/Slides/Headings";
import { SlideImage } from "@/components/Slides/SlideImage";

const TableImage = ({
  slice,
  context,
}: {
  slice: PricingSliceTableImage;
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
      <SlideFullWidth className="">
        <Headings
          eyebrow={slice.primary.eyebrow}
          title={slice.primary.title}
          alignTop
          titleSize="text-xl"
        />
        <div className="max-h-[636px]">
          <SlideImage
            field={slice.primary.table}
            cover
            fullWidth
            border={slice.primary.image_border}
          />
          <GlobalPrismicRichText
            field={slice.primary.bottom_content}
            companyName={context.page?.company_name!}
            theme={
              slice.primary.theme === "slider theme"
                ? context.page.theme
                : slice.primary.theme
            }
            classNames="text-xl mt-4"
          />
        </div>
      </SlideFullWidth>
    </Container>
  );
};

export default TableImage;
