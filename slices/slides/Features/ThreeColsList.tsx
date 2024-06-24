import { FeaturesSliceThreeColsList } from "@/prismicio-types";
import { Container } from "@/components/Slides/Container";
import { Context } from "../IntroSlide";
import { GlobalPrismicRichText } from "@/components/GlobalPrismicRichText";
import { Button } from "@/components/Button";
import { SlideFullWidth } from "@/components/Slides/SlideFullWidth";

const ThreeColsList = ({
  slice,
  context,
}: {
  slice: FeaturesSliceThreeColsList;
  context: Context;
}): JSX.Element => {
  return (
    <Container page={context.page} settings={context.settings}>
      <SlideFullWidth className="flex flex-row justify-center">
        <GlobalPrismicRichText field={slice.primary.title} />
        <div className="flex flex-row gap-x-32">
          {slice.primary.features.map((item, idx) => (
            <div key={idx} className="w-1/3 flex flex-col justify-between">
              <div>
                <GlobalPrismicRichText
                  field={item.title}
                  components={{
                    heading3: ({ children }) => (
                      <h3 className="text-3xl font-medium font-headings text-gray-darker my-4 first:mt-0 break-words border-b-2 border-gray-base">
                        {children}
                      </h3>
                    ),
                  }}
                />
                <GlobalPrismicRichText
                  field={item.description}
                  components={{
                    paragraph: ({ children }) => (
                      <p className="font-copy text-2xl mb-2 text-gray-darker break-words font-normal">
                        {children}
                      </p>
                    ),
                  }}
                />
              </div>
              <Button
                variant="primary"
                color="black"
                field={item.cta_link}
                className="w-fit mt-8"
              >
                {item.cta_label}
              </Button>
            </div>
          ))}
        </div>
      </SlideFullWidth>
    </Container>
  );
};

export default ThreeColsList;
