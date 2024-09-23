import { GlobalPrismicRichText } from "@/components/GlobalPrismicRichText";
import { LeadsGoalsSliceWithImageGrid } from "@/prismicio-types";
import { Container } from "@/components/Slides/Container";
import { SlideTwoCols } from "@/components/Slides/SlideTwoCols";
import { LeftCol, RightCol } from "@/components/Slides/Columns";
import { PrismicNextImage } from "@prismicio/next";
import { Context } from "@/utils/GlobalTypes";

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
      theme={
        slice.primary.theme === "slider theme" && context?.page?.theme
          ? context.page.theme
          : slice.primary.theme === "slider theme" && !context?.page?.theme
            ? "white"
            : slice.primary.theme
      }
    >
      <SlideTwoCols className="mb-0" larger="right" overflowRight>
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
          />
        </LeftCol>
        <RightCol>
          <div className="w-full relative ">
            <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              <div
                aria-hidden="true"
                className="pointer-events-none lg:absolute lg:inset-y-0 lg:mx-auto lg:w-full lg:max-w-7xl"
              >
                <div className="absolute sm:top-0 lg:top-1/2 lg:-translate-y-1/2 lg:translate-x-8">
                  <div className="flex items-center space-x-6 lg:space-x-8">
                    <div className="w-1/2 mt-16 grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                      {slice.primary.grid_left_column.map((item, idx) => (
                        <PrismicNextImage
                          key={idx}
                          field={item.image}
                          className="h-full w-96 object-contain p-4 bg-white rounded-xl shadow-2xl"
                        />
                      ))}
                    </div>
                    <div className="w-1/2 -mt-32 grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
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
