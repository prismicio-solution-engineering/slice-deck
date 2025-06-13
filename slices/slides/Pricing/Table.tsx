import { PricingSliceTable } from "@/prismicio-types";
import { Container } from "@/components/Slides/Container";
import { Context } from "@/utils/GlobalTypes";
import { GlobalPrismicRichText } from "@/components/GlobalPrismicRichText";
import { SlideFullWidth } from "@/components/Slides/SlideFullWidth";
import { Headings } from "@/components/Slides/Headings";
import { PrismicTable } from "@prismicio/react";

const Table = ({
  slice,
  context,
}: {
  slice: PricingSliceTable;
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
      <SlideFullWidth className="">
        <Headings
          eyebrow={slice.primary.eyebrow}
          title={slice.primary.title}
          alignTop
          titleSize="text-xl"
        />
        <div className="max-h-[636px]">
          {slice.primary.table && (
            <div className="overflow-x-auto rounded-lg border border-gray-200 bg-white shadow-sm">
              {(() => {
                return (
                  <PrismicTable
                    field={slice.primary.table}
                    components={{
                      table: ({ children }: { children: React.ReactNode }) => (
                        <table className="min-w-full text-left text-base text-gray-700">
                          {children}
                        </table>
                      ),
                      thead: ({ children }: { children: React.ReactNode }) => (
                        <thead className="bg-gray-50 border-b border-gray-200">
                          {children}
                        </thead>
                      ),
                      tbody: ({ children }: { children: React.ReactNode }) => (
                        <tbody className="divide-y divide-gray-100">
                          {children}
                        </tbody>
                      ),
                      tr: ({ children }: { children: React.ReactNode }) => (
                        <tr className="hover:bg-gray-50">{children}</tr>
                      ),
                      th: ({ children }: { children: React.ReactNode }) => (
                        <th className="px-4 py-3 font-semibold">{children}</th>
                      ),
                      td: ({ children }: { children: React.ReactNode }) => (
                        <td className="px-4 py-3">{children}</td>
                      ),
                    }}
                  />
                );
              })()}
            </div>
          )}
          <GlobalPrismicRichText
            field={slice.primary.bottom_content}
            companyName={context.page?.company_name!}
            theme={
              slice.primary.theme === "slider theme"
                ? context.page.theme
                : slice.primary.theme
            }
            classNames="text-xl mt-4"
          />
        </div>
      </SlideFullWidth>
    </Container>
  );
};

export default Table;
