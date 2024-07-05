import { PricingSliceEnterpriseGrid, PricingSliceTableImage } from "@/prismicio-types";
import { Container } from "@/components/Slides/Container";
import { Context } from "../IntroSlide";
import { PrismicNextLink } from "@prismicio/next";
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
      theme={slice.primary.theme}
    >
      <SlideFullWidth>
        <Headings
          eyebrow={slice.primary.eyebrow}
          title={slice.primary.title}
          alignTop
        />
      </SlideFullWidth>
    </Container>
  );
};

export default Table;
