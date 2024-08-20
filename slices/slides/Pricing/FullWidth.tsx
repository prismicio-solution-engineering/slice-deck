import { PricingSliceDefault } from "@/prismicio-types";
import { Container } from "@/components/Slides/Container";
import { Context } from "@/utils/GlobalTypes";
import { Headings } from "@/components/Slides/Headings";
import { GlobalPrismicRichText } from "@/components/GlobalPrismicRichText";
import { SlideTwoCols } from "@/components/Slides/SlideTwoCols";
import { LeftCol, RightCol } from "@/components/Slides/Columns";
import { Card } from "@/components/Card";
import { PrismicNextImage } from "@prismicio/next";

const FullWidth = ({
  slice,
  context,
}: {
  slice: PricingSliceDefault;
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
      <SlideTwoCols>
        <LeftCol>
          <Headings
            eyebrow={slice.primary.eyebrow}
            title={slice.primary.title}
            alignTop
            alignLeft
            titleSize="!text-5xl"
          />
          <div>
            <GlobalPrismicRichText
              field={slice.primary.content_left_column}
              theme={
                slice.primary.theme === "slider theme"
                  ? context.page.theme
                  : slice.primary.theme
              }
            />
          </div>
        </LeftCol>
        <RightCol className="justify-between">
          <Card className="bg-white h-fit border-4 border-gray-darker">
            {slice.primary.card.map((item, idx) => (
              <div key={idx} className="flex flex-col">
                <GlobalPrismicRichText
                  field={item.description}
                  theme={
                    slice.primary.theme === "slider theme"
                      ? context.page.theme
                      : slice.primary.theme
                  }
                  classNames="text-xl"
                />
                <div className="w-full mt-4 flex flex-row gap-x-4 justify-around">
                  <PrismicNextImage
                    field={item.logo_1}
                    imgixParams={{
                      monochrome: "AAAAAA",
                    }}
                    height={16}
                  />
                  <PrismicNextImage
                    field={item.logo_2}
                    imgixParams={{
                      monochrome: "AAAAAA",
                    }}
                    height={16}
                  />
                  <PrismicNextImage
                    field={item.logo_3}
                    imgixParams={{
                      monochrome: "AAAAAA",
                    }}
                    height={16}
                  />
                  <PrismicNextImage
                    field={item.logo_4}
                    imgixParams={{
                      monochrome: "AAAAAA",
                    }}
                    height={16}
                  />
                  <PrismicNextImage
                    field={item.logo_5}
                    imgixParams={{
                      monochrome: "AAAAAA",
                    }}
                    height={16}
                  />
                  <PrismicNextImage
                    field={item.logo_6}
                    imgixParams={{
                      monochrome: "AAAAAA",
                    }}
                    height={16}
                  />
                </div>
              </div>
            ))}
          </Card>
        </RightCol>
      </SlideTwoCols>
    </Container>
  );
};

export default FullWidth;
