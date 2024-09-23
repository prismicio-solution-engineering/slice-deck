import { GlobalPrismicRichText } from "@/components/GlobalPrismicRichText";
import { LeadsGoalsSliceDefault } from "@/prismicio-types";
import { Container } from "@/components/Slides/Container";
import { SlideTwoCols } from "@/components/Slides/SlideTwoCols";
import { LeftCol, RightCol } from "@/components/Slides/Columns";
import { PrismicNextImage } from "@prismicio/next";
import { Context } from "@/utils/GlobalTypes";

const WithImage = ({
  slice,
  context,
}: {
  slice: LeadsGoalsSliceDefault;
  context: Context;
}): JSX.Element => {
  return (
    <Container
      page={context.page}
      settings={context.settings}
      theme={
        slice.primary.theme === "slider theme"
          ? context.page.theme
          : slice.primary.theme
      }
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
            theme={
              slice.primary.theme === "slider theme"
                ? context.page.theme
                : slice.primary.theme
            }
          />
        </LeftCol>
        <RightCol>
          <PrismicNextImage
            field={slice.primary.image}
            className={`${slice.primary.image_border && "border-2 border-gray-darker"} shadow-xl object-cover`}
          />
        </RightCol>
      </SlideTwoCols>
    </Container>
  );
};

export default WithImage;
