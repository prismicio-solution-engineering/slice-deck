import { GlobalPrismicRichText } from "@/components/GlobalPrismicRichText";
import { MethodologySliceDefault } from "@/prismicio-types";
import { SlideTwoCols } from "@/components/Slides/SlideTwoCols";
import { LeftCol, RightCol } from "@/components/Slides/Columns";
import { Container } from "@/components/Slides/Container";
import { Context } from "@/utils/GlobalTypes";
import { PrismicNextImage } from "@prismicio/next";

const Intro = ({
  slice,
  context,
}: {
  slice: MethodologySliceDefault;
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
      <SlideTwoCols>
        <LeftCol>
          <PrismicNextImage field={slice.primary.image} />
        </LeftCol>
        <RightCol className="gap-y-4">
          <GlobalPrismicRichText field={slice.primary.title} />
          <GlobalPrismicRichText
            field={slice.primary.description}
            theme={slice.primary.theme === "slider theme" ? context.page.theme : slice.primary.theme}
          />
          <div className="flex flex-col gap-y-4 mt-4">
            {slice.primary.users.map((item, idx) => (
              <div
                key={idx}
                className={`flex flex-row items-center gap-x-8 text-3xl font-headings font-semibold ${idx === 0 ? "text-primary-pink" : idx === 1 ? "text-primary-blue" : "text-primary-green"}`}
              >
                <span
                  className={`w-16 text-center p-2 rounded-md border ${idx === 0 ? "border-primary-pink bg-tertiary-pink" : idx === 1 ? "border-primary-blue bg-tertiary-blue" : "border-primary-green bg-tertiary-green"}`}
                >
                  {(idx += 1)}{" "}
                </span>
                <p className="">{item.user}</p>
              </div>
            ))}
          </div>
        </RightCol>
      </SlideTwoCols>
    </Container>
  );
};

export default Intro;
