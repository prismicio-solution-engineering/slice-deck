import { Container } from "@/components/Slides/Container";
import { OfferSlice } from "@/prismicio-types";
import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import { Context } from "@/utils/GlobalTypes";
import { SlideTwoCols } from "@/components/Slides/SlideTwoCols";
import { LeftCol, RightCol } from "@/components/Slides/Columns";
import { SlideFullWidth } from "@/components/Slides/SlideFullWidth";
import { GlobalPrismicRichText } from "@/components/GlobalPrismicRichText";
import { Headings } from "@/components/Slides/Headings";
import { PrismicNextImage } from "@prismicio/next";

/**
 * Props for `Offer`.
 */
export type OfferProps = SliceComponentProps<Content.OfferSlice>;

/**
 * Component for "Offer" Slices.
 */
const Offer = ({
  slice,
  context,
}: {
  slice: OfferSlice;
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
      {/* <Headings
        eyebrow={slice.primary.eyebrow}
        title={slice.primary.title}
        alignTop
        titleSize="!text-4xl"
      /> */}
      {
        slice.variation === "default" ? (
          <SlideTwoCols larger="right" className="mb-0">
            <LeftCol>
              <div className="font-headings text-3xl font-semibold text-primary-pink">
                {slice.primary.eyebrow}
              </div>
              <GlobalPrismicRichText field={slice.primary.title} />
              <GlobalPrismicRichText
                field={slice.primary.description}
                // theme={slice.primary.theme}
              />
              {/* <GlobalPrismicRichText field={slice.primary.description} /> */}
            </LeftCol>
            <RightCol>
              <PrismicNextImage field={slice.primary.table_image} />
            </RightCol>
          </SlideTwoCols>
        ) : (
          slice.variation === "fullWidthTables" && (
            <SlideFullWidth className="mb-0">
              {slice.primary.tables.map((table, index) => {
                return (
                  <div key={index}>
                    <GlobalPrismicRichText field={table.title} />
                    <PrismicNextImage field={table.table_image} />
                  </div>
                );
              })}
            </SlideFullWidth>
          )
        )
        // : (
        //   slice.variation === "twoTablesColumns" && (
        //     <SlideTwoCols className="mb-0">
        //       <LeftCol>
        //         {slice.primary.content_left_column.map((table, index) => {
        //           return (
        //             <div key={index}>
        //               <GlobalPrismicRichText
        //                 field={table.title}
        //                 classNames="!text-3xl"
        //               />
        //               <GlobalPrismicRichText field={table.description} />
        //               <PrismicNextImage field={table.table_image} />
        //             </div>
        //           );
        //         })}
        //       </LeftCol>
        //       <RightCol>
        //         {slice.primary.content_right_column.map((table, index) => {
        //           return (
        //             <div key={index}>
        //               <GlobalPrismicRichText
        //                 field={table.title}
        //                 classNames="!text-3xl"
        //               />
        //               <GlobalPrismicRichText field={table.description} />
        //               <PrismicNextImage field={table.table_image} />
        //             </div>
        //           );
        //         })}
        //       </RightCol>
        //     </SlideTwoCols>
        //   )
        // )
      }
    </Container>
  );
};

export default Offer;
