import { PricingSliceDefault } from "@/prismicio-types";
import { Container } from "@/components/Slides/Container";
import { Context } from "@/utils/GlobalTypes";
import { Headings } from "@/components/Slides/Headings";
import { GlobalPrismicRichText } from "@/components/GlobalPrismicRichText";
import { SlideTwoCols } from "@/components/Slides/SlideTwoCols";
import { LeftCol, RightCol } from "@/components/Slides/Columns";
import { Card } from "@/components/Card";
import { PrismicNextImage } from "@prismicio/next";
import StarIllustration from "@/assets/illustrations/star";
import { Icon } from "@/components/Icon";

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
      <div className="absolute inset-0 left-[90%] top-24 overflow-hidden">
        <StarIllustration />
      </div>
      <SlideTwoCols className="relative">
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
          <Card className="bg-white h-fit border-4 mt-16 border-gray-darker">
            <div className="w-full flex flex-col">
              <GlobalPrismicRichText
                field={slice.primary.card_description}
                theme={
                  slice.primary.theme === "slider theme"
                    ? context.page.theme
                    : slice.primary.theme
                }
                classNames="text-xl"
              />
              <div className="w-full mt-4 flex flex-row gap-x-4 justify-evenly overflow-clip">
                {slice.primary.card.map((item, idx) => {
                  return item.logo.url?.includes(".svg") ? (
                    <Icon
                      key={idx}
                      src={item.logo.url}
                      size="auto"
                      color="gray"
                      className="h-5"
                      fallback={item.logo}
                    />
                  ) : (
                    <PrismicNextImage
                      key={idx}
                      field={item.logo}
                      imgixParams={{
                        monochrome: "AAAAAA",
                      }}
                      height={20}
                    />
                  );
                })}
              </div>
            </div>
          </Card>
        </RightCol>
      </SlideTwoCols>
    </Container>
  );
};

export default FullWidth;
