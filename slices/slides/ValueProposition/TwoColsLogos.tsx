import { ValuePropositionSliceTwoColumnsWithLogos } from "@/prismicio-types";
import { SlideTwoCols } from "@/components/Slides/SlideTwoCols";
import { LeftCol, RightCol } from "@/components/Slides/Columns";
import { Container } from "@/components/Slides/Container";
import { Context } from "../IntroSlide";
import { PrismicNextImage } from "@prismicio/next";
import { Content } from "./Content";

const TwoColsLogos = ({
  slice,
  context,
}: {
  slice: ValuePropositionSliceTwoColumnsWithLogos;
  context: Context;
}): JSX.Element => {
  return (
    <Container
      page={context.page}
      settings={context.settings}
      theme={slice.primary.theme}
    >
      <SlideTwoCols>
        <LeftCol>
          <div className="font-headings text-3xl font-semibold text-primary-pink">
            {slice.primary.eyebrow}
          </div>
          <Content
            title={slice.primary.title}
            description={slice.primary.description}
          />
          <div className="mt-16 w-full flex flex-row gap-x-8 justify-start">
            {slice.primary.logos.map((item, idx) => (
              <PrismicNextImage
                key={idx}
                field={item.logo}
                imgixParams={{
                  monochrome: "AAAAAA",
                }}
                height={40}
                className="object-contain"
              />
            ))}
          </div>
        </LeftCol>
        <RightCol>
          <PrismicNextImage
            field={slice.primary.image}
            className="border-2 border-gray-darker shadow-xl"
          />
        </RightCol>
      </SlideTwoCols>
    </Container>
  );
};

export default TwoColsLogos;
