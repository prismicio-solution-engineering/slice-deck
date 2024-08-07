"use client";
import { Container } from "@/components/Slides/Container";
import { OfferSlice } from "@/prismicio-types";
import { Content, isFilled } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import { Context } from "../IntroSlide";
import { SlideTwoCols } from "@/components/Slides/SlideTwoCols";
import { LeftCol, RightCol } from "@/components/Slides/Columns";
import Table from "@/components/Table";
import { SlideFullWidth } from "@/components/Slides/SlideFullWidth";
import { GlobalPrismicRichText } from "@/components/GlobalPrismicRichText";
import { Headings } from "@/components/Slides/Headings";

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
      theme={slice.primary.theme}
    >
      <Headings
        eyebrow={slice.primary.eyebrow}
        title={slice.primary.title}
        alignTop
        titleSize="!text-4xl"
      />
      {slice.variation === "default" ? (
        <SlideTwoCols larger="right" className="mb-0">
          <LeftCol>
            <GlobalPrismicRichText field={slice.primary.description} />
          </LeftCol>
          <RightCol>
            {slice.primary.tables.map((table, index) => {
              return (
                isFilled.linkToMedia(table.table_csv) && (
                  <div key={index}>
                    <Table
                      tableCsv={table.table_csv}
                      hasHeader={table.table_has_header}
                    />
                  </div>
                )
              );
            })}
          </RightCol>
        </SlideTwoCols>
      ) : slice.variation === "fullWidthTables" ? (
        <SlideFullWidth className="mb-0">
          {slice.primary.tables.map((table, index) => {
            return (
              <div key={index}>
                <GlobalPrismicRichText field={table.title} />
                {isFilled.linkToMedia(table.table_csv) && (
                  <Table
                    tableCsv={table.table_csv}
                    hasHeader={table.table_has_header}
                  />
                )}
              </div>
            );
          })}
        </SlideFullWidth>
      ) : slice.variation === "twoTablesColumns" ? (
        <SlideTwoCols className="mb-0">
          <LeftCol>
            {slice.primary.content_left_column.map((table, index) => {
              return (
                <div key={index}>
                  <GlobalPrismicRichText
                    field={table.title}
                    classNames="!text-3xl"
                  />
                  <GlobalPrismicRichText field={table.description} />
                  {isFilled.linkToMedia(table.table_csv) && (
                    <Table
                      tableCsv={table.table_csv}
                      hasHeader={table.table_has_header}
                    />
                  )}
                </div>
              );
            })}
          </LeftCol>
          <RightCol>
            {slice.primary.content_right_column.map((table, index) => {
              return (
                <div key={index}>
                  <GlobalPrismicRichText
                    field={table.title}
                    classNames="!text-3xl"
                  />
                  <GlobalPrismicRichText field={table.description} />
                  {isFilled.linkToMedia(table.table_csv) && (
                    <Table
                      tableCsv={table.table_csv}
                      hasHeader={table.table_has_header}
                    />
                  )}
                </div>
              );
            })}
          </RightCol>
        </SlideTwoCols>
      ) : (
        slice.variation === "twoColsTable" && (
          <SlideTwoCols larger="right" className="mb-0">
            <LeftCol>
              <GlobalPrismicRichText field={slice.primary.description} />
            </LeftCol>
            <RightCol>
              {slice.primary.table.map((table, index) => {
                return (
                  isFilled.linkToMedia(table.table_csv) && (
                    <div key={index}>
                      <Table
                        tableCsv={table.table_csv}
                        hasHeader={table.table_has_header}
                      />
                    </div>
                  )
                );
              })}
            </RightCol>
          </SlideTwoCols>
        )
      )}
    </Container>
  );
};

export default Offer;
