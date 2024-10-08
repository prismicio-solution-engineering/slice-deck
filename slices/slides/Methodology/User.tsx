import { GlobalPrismicRichText } from "@/components/GlobalPrismicRichText";
import { MethodologySliceUser } from "@/prismicio-types";
import { SlideTwoCols } from "@/components/Slides/SlideTwoCols";
import { LeftCol, RightCol } from "@/components/Slides/Columns";
import { Container } from "@/components/Slides/Container";
import { Context } from "@/utils/GlobalTypes";
import { SlideImage } from "@/components/Slides/SlideImage";

const Content = ({
  slice,
  context,
}: {
  slice: MethodologySliceUser;
  context: Context;
}) => {
  return (
    <div className="flex flex-col gap-y-4">
      {slice.primary.user_number && (
        <span
          className={`w-16 text-3xl font-headings font-semibold text-center text-primary-${slice.primary.user_color} p-2 rounded-md border border-primary-${slice.primary.user_color} bg-tertiary-${slice.primary.user_color}`}
        >
          {slice.primary.user_number}
        </span>
      )}
      <GlobalPrismicRichText
        field={slice.primary.title}
        classNames={`text-primary-${slice.primary.user_color}`}
      />
      <GlobalPrismicRichText
        field={slice.primary.description}
        classNames="!text-5xl"
        theme={
          slice.primary.theme === "slider theme"
            ? context.page.theme
            : slice.primary.theme
        }
      />
    </div>
  );
};

const User = ({
  slice,
  context,
}: {
  slice: MethodologySliceUser;
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
      {slice.primary.media_side ? (
        <SlideTwoCols overflowRight>
          <LeftCol className="gap-y-4">
            <Content slice={slice} context={context} />
          </LeftCol>
          <RightCol>
            <SlideImage
              field={slice.primary.image}
              className="w-full h-full shadow-xl"
              cover
              overflowRight
              border={slice.primary.image_border}
            />
          </RightCol>
        </SlideTwoCols>
      ) : (
        <SlideTwoCols overflowLeft>
          <LeftCol className="gap-y-4">
            <SlideImage
              field={slice.primary.image}
              className="w-full h-full shadow-xl"
              cover
              overflowLeft
              border={slice.primary.image_border}
            />
          </LeftCol>
          <RightCol>
            <Content slice={slice} context={context} />
          </RightCol>
        </SlideTwoCols>
      )}
    </Container>
  );
};

export default User;
