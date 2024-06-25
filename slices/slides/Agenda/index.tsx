import { SlideTwoCols } from "@/components/Slides/SlideTwoCols";
import { AgendaSlice } from "@/prismicio-types";
import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import { Context } from "../IntroSlide";
import { Container } from "@/components/Slides/Container";
import { LeftCol, RightCol } from "@/components/Slides/Columns";
import { GlobalPrismicRichText } from "@/components/GlobalPrismicRichText";
import { PrismicNextImage } from "@prismicio/next";

/**
 * Props for `Agenda`.
 */
export type AgendaProps = SliceComponentProps<Content.AgendaSlice>;

/**
 * Component for "Agenda" Slices.
 */
const Agenda = ({
  slice,
  context,
}: {
  slice: AgendaSlice;
  context: Context;
}): JSX.Element => {
  return (
    <Container page={context.page} settings={context.settings}>
      <SlideTwoCols className="items-center">
        <LeftCol>
          <GlobalPrismicRichText field={slice.primary.title} />
          {slice.primary.summary_items.map((item, idx) => (
            <div
              key={idx}
              className="flex flex-col py-4 border-b border-gray-base mr-32"
            >
              <div className="flex flex-row items-center gap-6">
                <span className={`text-4xl w-16`}>{(idx += 1)} </span>

                <GlobalPrismicRichText
                  field={item.summary_item_name}
                  companyName={context.page?.company_name!}
                  classNames="text-3xl"
                  // components={{
                  //   paragraph: ({ children }) => (
                  //     <p className="font-copy text-3xl mb-2 text-gray-darker break-words font-normal">
                  //       {children}
                  //     </p>
                  //   ),
                  // }}
                />
              </div>
            </div>
          ))}
        </LeftCol>
        <RightCol>
          <PrismicNextImage field={slice.primary.image} />
        </RightCol>
      </SlideTwoCols>
    </Container>
  );
};

export default Agenda;
