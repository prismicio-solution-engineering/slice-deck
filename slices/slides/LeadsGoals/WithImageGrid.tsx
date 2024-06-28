import { GlobalPrismicRichText } from "@/components/GlobalPrismicRichText";
import { LeadsGoalsSliceWithImageGrid } from "@/prismicio-types";
import { Container } from "@/components/Slides/Container";
import { SlideTwoCols } from "@/components/Slides/SlideTwoCols";
import { LeftCol, RightCol } from "@/components/Slides/Columns";
import { PrismicNextImage } from "@prismicio/next";
import { Context } from "../IntroSlide";

const WithImageGrid = ({
  slice,
  context,
}: {
  slice: LeadsGoalsSliceWithImageGrid;
  context: Context;
}): JSX.Element => {
  return (
    <Container
      page={context.page}
      settings={context.settings}
      theme={slice.primary.theme}
    >
      <SlideTwoCols className="items-center" larger="right">
        <LeftCol>
          <div className="font-headings text-3xl font-semibold text-primary-pink">
            {slice.primary.eyebrow}
          </div>
          <GlobalPrismicRichText
            field={slice.primary.title}
            companyName={context.page?.company_name!}
          />
          <GlobalPrismicRichText
            field={slice.primary.description}
            companyName={context.page?.company_name!}
            theme={slice.primary.theme}
          />
        </LeftCol>
        <RightCol>
          <PrismicNextImage field={slice.primary.image} className="border-2 border-gray-darker shadow-xl"/>
        </RightCol>
      </SlideTwoCols>
    </Container>
  );
};

export default WithImageGrid;
