import { KeyTextField, RichTextField } from "@prismicio/client";
import { GlobalPrismicRichText } from "../GlobalPrismicRichText";

export const Headings = ({
  eyebrow,
  title,
  alignLeft,
  alignTop,
  titleSize
}: {
  eyebrow: KeyTextField;
  title: RichTextField;
  alignLeft?: boolean;
  alignTop?: boolean;
  titleSize?: string;
}) => {
  return (
    <div className={`mb-4 ${alignTop && ""}`}>
      <div className={`font-headings text-3xl font-semibold text-primary-pink ${!alignLeft && "text-center"}`}>
        {eyebrow}
      </div>
      <GlobalPrismicRichText field={title} classNames={`${!alignLeft && "text-center"} ${titleSize && titleSize}`}/>
    </div>
  );
};
