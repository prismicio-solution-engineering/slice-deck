import { GlobalPrismicRichText } from "@/components/GlobalPrismicRichText";
import { ReferencesSliceWithImage } from "@/prismicio-types";
import { SlideTwoCols } from "@/components/Slides/SlideTwoCols";
import { LeftCol, RightCol } from "@/components/Slides/Columns";
import { Container } from "@/components/Slides/Container";
import { Context } from "@/utils/GlobalTypes";
import { PrismicNextImage } from "@prismicio/next";
import { Headings } from "@/components/Slides/Headings";

const WithImageGrid = ({
  slice,
  context,
}: {
  slice: ReferencesSliceWithImage;
  context: Context;
}): JSX.Element => {
  return (
    <Container
      page={context.page}
      settings={context.settings}
      theme={slice.primary.theme === "slider theme" ? context.page.theme : slice.primary.theme}
    >
      <SlideTwoCols larger="right" overflowRight className="mb-0">
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
            className="max-h-52 w-52 object-contain my-4"
          />
          <div className="mb-16">
            <GlobalPrismicRichText
              field={slice.primary.description}
              classNames="!text-3xl"
              theme={slice.primary.theme === "slider theme" ? context.page.theme : slice.primary.theme}
            />
          </div>
          <div>
            <GlobalPrismicRichText
              field={slice.primary.bottom_content}
              classNames="text-lg"
              theme={slice.primary.theme === "slider theme" ? context.page.theme : slice.primary.theme}
            />
          </div>
        </LeftCol>
        <RightCol>
          <div className="relative ">
            <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              <div
                aria-hidden="true"
                className="pointer-events-none lg:absolute lg:inset-y-0 lg:mx-auto lg:w-full lg:max-w-7xl"
              >
                <div className="absolute sm:top-0 lg:top-1/2 lg:-translate-y-1/2 lg:translate-x-8">
                  <div className="flex items-center space-x-6 lg:space-x-8">
                    <div className="w-1/2 grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                      {slice.primary.grid_left_column.map((item, idx) => (
                        <PrismicNextImage
                          key={idx}
                          field={item.image}
                          className="h-full w-96 object-contain p-4 bg-white rounded-xl shadow-2xl"
                        />
                      ))}
                    </div>
                    <div className="w-1/2 grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                      {slice.primary.grid_right_column.map((item, idx) => (
                        <PrismicNextImage
                          key={idx}
                          field={item.image}
                          className="w-96 object-contain p-4 bg-white rounded-xl shadow-xl"
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </RightCol>
      </SlideTwoCols>
    </Container>
  );
};

export default WithImageGrid;
