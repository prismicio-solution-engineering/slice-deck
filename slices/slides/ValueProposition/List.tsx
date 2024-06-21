import { ValuePropositionSliceWithList } from "@/prismicio-types";
import { SlideFullWidth } from "@/components/Slides/SlideFullWidth";
import { PrismicNextImage } from "@prismicio/next";
import { Container } from "@/components/Slides/Container";
import { Context } from "../IntroSlide";
import { GlobalPrismicRichText } from "@/components/GlobalPrismicRichText";

const List = ({
  slice,
  context,
}: {
  slice: ValuePropositionSliceWithList;
  context: Context;
}): JSX.Element => {
  return (
    <Container page={context.page} settings={context.settings}>
      <SlideFullWidth className="items-center justify-evenly">
        <GlobalPrismicRichText
          field={slice.primary.title}
          components={{
            heading2: ({ children }) => (
              <h2
                className={`text-4xl font-headings font-medium text-gray-darker break-words text-center w-8/12`}
              >
                {children}
              </h2>
            ),
          }}
        />
        <div className="flex flex-col gap-y-4">
          {slice.primary.list.map((item, idx) => (
            <div key={idx} className="flex flex-row gap-x-8">
              <PrismicNextImage field={item.list_icon} />
              <GlobalPrismicRichText
                field={item.list_item}
                components={{
                  paragraph: ({ children }) => (
                    <p className="font-copy text-2xl pb-1 text-gray-darker break-words font-normal">
                      {children}
                    </p>
                  ),
                }}
              />
            </div>
          ))}
        </div>
      </SlideFullWidth>
    </Container>
  );
};

export default List;
