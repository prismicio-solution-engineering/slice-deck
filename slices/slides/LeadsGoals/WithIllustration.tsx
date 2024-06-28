import { GlobalPrismicRichText } from "@/components/GlobalPrismicRichText";
import {
  LeadsGoalsSliceWithIllustration,
  LeadsGoalsSliceWithImageAndIllustration,
  LeadsGoalsSliceWithImageGrid,
} from "@/prismicio-types";
import { Container } from "@/components/Slides/Container";
import { SlideTwoCols } from "@/components/Slides/SlideTwoCols";
import { LeftCol, RightCol } from "@/components/Slides/Columns";
import { PrismicNextImage } from "@prismicio/next";
import { Context } from "../IntroSlide";

const WithIllustration = ({
  slice,
  context,
}: {
  slice:
    | LeadsGoalsSliceWithIllustration
    | LeadsGoalsSliceWithImageAndIllustration;
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
          {slice.variation === "withIllustration" && (
            <PrismicNextImage
              field={slice.primary.illustration}
              className={`border-2 border-gray-darker shadow-xl`}
            />
          )}
          {slice.variation === "withImageAndIllustration" && (
            <div className="flex flex-row gap-x-8">
            <PrismicNextImage
              field={slice.primary.illustration}
              className={`border-2 border-gray-darker shadow-xl`}
              />
            <PrismicNextImage
              field={slice.primary.illustration}
              className={`border-2 border-gray-darker shadow-xl`}
              />
              </div>
          )}
        </RightCol>
      </SlideTwoCols>
    </Container>
  );
};

export default WithIllustration;
