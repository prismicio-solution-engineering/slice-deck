import { GlobalPrismicRichText } from "@/components/GlobalPrismicRichText";
import { ReferencesSliceDefault } from "@/prismicio-types";
import { SlideTwoCols } from "@/components/Slides/SlideTwoCols";
import { LeftCol, RightCol } from "@/components/Slides/Columns";
import { Container } from "@/components/Slides/Container";
import { Context } from "@/utils/GlobalTypes";
import { PrismicNextImage } from "@prismicio/next";
import { Headings } from "@/components/Slides/Headings";

const TwoColsText = ({
  slice,
  context,
}: {
  slice: ReferencesSliceDefault;
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
      <SlideTwoCols>
        <LeftCol>
          <Headings
            eyebrow={slice.primary.eyebrow}
            title={slice.primary.title}
            alignLeft
            alignTop
          />

          <PrismicNextImage
            field={slice.primary.company_logo}
            imgixParams={{
              monochrome: "AAAAAA",
            }}
            className="max-h-20 max-w-32 object-contain"
          />
          <GlobalPrismicRichText
            field={slice.primary.description}
            classNames="!text-3xl"
            theme={slice.primary.theme === "slider theme" ? context.page.theme : slice.primary.theme}
          />
        </LeftCol>
        <RightCol>
          <GlobalPrismicRichText
            field={slice.primary.right_side_content}
            theme={slice.primary.theme === "slider theme" ? context.page.theme : slice.primary.theme}
          />
        </RightCol>
      </SlideTwoCols>
    </Container>
  );
};

export default TwoColsText;
