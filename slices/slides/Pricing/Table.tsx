import { PricingSliceEnterpriseGrid, PricingSliceTableImage } from "@/prismicio-types";
import { Container } from "@/components/Slides/Container";
import { Context } from "@/utils/GlobalTypes";
import { PrismicNextImage, PrismicNextLink } from "@prismicio/next";
import { GlobalPrismicRichText } from "@/components/GlobalPrismicRichText";
import { SlideFullWidth } from "@/components/Slides/SlideFullWidth";
import { isFilled } from "@prismicio/client";
import { Icon } from "@/components/Icon";
import { Card } from "@/components/Card";
import { Headings } from "@/components/Slides/Headings";

const Table = ({
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
      theme={slice.primary.theme === "slider theme" ? context.page.theme : slice.primary.theme}
    >
      <SlideFullWidth className="">
        <Headings
          eyebrow={slice.primary.eyebrow}
          title={slice.primary.title}
          alignTop
          titleSize="text-xl"
        />
        <div className="max-h-[636px]">

        <PrismicNextImage field={slice.primary.table} className="h-full object-contain border-2 border-gray-darker" />
        </div>
      </SlideFullWidth>
    </Container>
  );
};

export default Table;
