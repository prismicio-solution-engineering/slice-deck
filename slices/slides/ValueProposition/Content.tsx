import { GlobalPrismicRichText } from "@/components/GlobalPrismicRichText";
import { RichTextField } from "@prismicio/client";

export const Content = ({
  title,
  description,
  theme,
}: {
  title: RichTextField;
  description: RichTextField;
  theme?: "white" | "orange" | "pink" | "green" | "purple" | "blue";
}) => {
  return (
    <div className="w-full flex flex-col gap-y-4">
      <GlobalPrismicRichText field={title} />
      <GlobalPrismicRichText field={description} theme={theme} />
    </div>
  );
};
