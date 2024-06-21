import { GlobalPrismicRichText } from "@/components/GlobalPrismicRichText";
import { RichTextField } from "@prismicio/client";

export const Content = ({
    title,
    description,
  }: {
    title: RichTextField;
    description: RichTextField;
  }) => {
    return (
      <div className="w-full flex flex-col gap-y-4">
        <GlobalPrismicRichText field={title} />
        <GlobalPrismicRichText field={description} />
      </div>
    );
  };