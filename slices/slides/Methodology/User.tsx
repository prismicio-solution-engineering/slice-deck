import { GlobalPrismicRichText } from "@/components/GlobalPrismicRichText";
import { MethodologySliceUser } from "@/prismicio-types";
import { SlideTwoCols } from "@/components/Slides/SlideTwoCols";
import { LeftCol, RightCol } from "@/components/Slides/Columns";
import { Container } from "@/components/Slides/Container";
import { Context } from "../IntroSlide";
import { PrismicNextImage } from "@prismicio/next";

const User = ({
  slice,
  context,
}: {
  slice: MethodologySliceUser;
  context: Context;
}): JSX.Element => {
  return (
    <Container page={context.page} settings={context.settings}>
      <SlideTwoCols overflowRight className="items-center">
        <LeftCol className="flex flex-col gap-y-8 justify-center">
          <GlobalPrismicRichText field={slice.primary.title} />
          <GlobalPrismicRichText field={slice.primary.description} components={{
            paragraph: ({ children }) => (
              <p className="font-copy text-3xl pb-2 text-gray-darker break-words font-normal">{children}</p>
            ),
          }}/>
        </LeftCol>
        <RightCol className="flex flex-col justify-center items-end object-contain">
          <PrismicNextImage field={slice.primary.image} />
        </RightCol>
      </SlideTwoCols>
    </Container>
  );
};

export default User;
