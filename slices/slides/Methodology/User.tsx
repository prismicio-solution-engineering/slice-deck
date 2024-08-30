import { GlobalPrismicRichText } from "@/components/GlobalPrismicRichText";
import { MethodologySliceUser } from "@/prismicio-types";
import { SlideTwoCols } from "@/components/Slides/SlideTwoCols";
import { LeftCol, RightCol } from "@/components/Slides/Columns";
import { Container } from "@/components/Slides/Container";
import { Context } from "@/utils/GlobalTypes";
import { PrismicNextImage } from "@prismicio/next";

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
        slice.primary.theme === "slider theme"
          ? context.page.theme
          : slice.primary.theme
      }
    >
      {slice.primary.media_side ? (
        <SlideTwoCols overflowRight>
          <LeftCol className="gap-y-4">
            <Content slice={slice} context={context} />
          </LeftCol>
          <RightCol>
            <PrismicNextImage field={slice.primary.image} />
          </RightCol>
        </SlideTwoCols>
      ) : (
        <SlideTwoCols overflowLeft>
          <LeftCol className="gap-y-4">
            <PrismicNextImage
              field={slice.primary.image}
              className="w-full h-full object-contain shadow-xl"
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
