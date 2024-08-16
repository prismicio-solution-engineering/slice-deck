import { GlobalPrismicRichText } from "@/components/GlobalPrismicRichText";
import {
  LeadsGoalsSliceWithIllustration,
  LeadsGoalsSliceWithImageAndIllustration,
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
      theme={slice.primary.theme === "slider theme" ? context.page.theme : slice.primary.theme}
    >
      <SlideTwoCols
        className="items-center"
        larger={slice.variation === "withIllustration" ? "" : "right"}
      >
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
            theme={slice.primary.theme === "slider theme" ? context.page.theme : slice.primary.theme}
            classNames="w-full"
          />
        </LeftCol>
        <RightCol>
          {slice.variation === "withIllustration" && (
            <div className="relative w-full h-full">
              <PrismicNextImage
                field={slice.primary.illustration}
                className={`w-[500px] absolute inset-0 top-1/3 left-16 z-10`}
              />
              <div
                className={`w-3/4 h-full ml-auto bg-tertiary-${slice.primary.illustration_background_color} border-2 border-gray-darker`}
              />
            </div>
          )}
          {slice.variation === "withImageAndIllustration" && (
            <div className="w-full h-3/4 flex flex-row gap-x-8">
              <PrismicNextImage
                field={slice.primary.image}
                className={`w-1/2 h-full object-cover object-center border-2 border-gray-darker`}
              />
              <div
                className={`relative w-1/2 h-full bg-tertiary-${slice.primary.illustration_background_color} border-2 border-gray-darker`}
              >
                <PrismicNextImage
                  field={slice.primary.illustration}
                  className={`h-full absolute inset-0 top-1/4 z-10`}
                />
              </div>
            </div>
          )}
        </RightCol>
      </SlideTwoCols>
    </Container>
  );
};

export default WithIllustration;
