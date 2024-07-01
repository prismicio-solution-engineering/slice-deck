import { GlobalPrismicRichText } from "@/components/GlobalPrismicRichText";
import { ReferencesSliceG2Badges, ReferencesSliceShowcasedWebsites } from "@/prismicio-types";
import { SlideTwoCols } from "@/components/Slides/SlideTwoCols";
import { LeftCol, RightCol } from "@/components/Slides/Columns";
import { Container } from "@/components/Slides/Container";
import { Context } from "../IntroSlide";
import { PrismicNextImage } from "@prismicio/next";

const G2Badges = ({
  slice,
  context,
}: {
  slice: ReferencesSliceG2Badges;
  context: Context;
}): JSX.Element => {
  return (
    <Container
      page={context.page}
      settings={context.settings}
      theme={slice.primary.theme}
    >
      <SlideTwoCols larger="right" overflowRight className="mb-0">
        <LeftCol>
          toto
        </LeftCol>
        <RightCol>
          Tutu
        </RightCol>
      </SlideTwoCols>
    </Container>
  );
};

export default G2Badges;