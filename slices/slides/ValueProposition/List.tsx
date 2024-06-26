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
          classNames="w-8/12 text-center"
        />
        <div className="flex flex-col gap-y-4">
          {slice.primary.list.map((item, idx) => (
            <div key={idx} className="flex flex-row gap-x-8">
              <PrismicNextImage field={item.list_icon} />
              <GlobalPrismicRichText
                field={item.list_item}
                classNames="!text-3xl"
              />
            </div>
          ))}
        </div>
      </SlideFullWidth>
    </Container>
  );
};

export default List;
