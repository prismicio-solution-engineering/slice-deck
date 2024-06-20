import { ImageField } from "@prismicio/client";
import { PrismicNextImage } from "@prismicio/next";

export const SlideImage = ({
  field,
  larger,
  overflowRight = false,
}: {
  field: ImageField;
  larger?: string;
  overflowRight?: boolean;
}) => {
  return (
    <div className="w-full h-full">
      {overflowRight ? (
        <PrismicNextImage
          field={field}
          width={larger === "right" ? 579 : larger === "left" ? 811 : 695}
          height={705}
        />
      ) : (
        <PrismicNextImage
          field={field}
          width={larger === "right" ? 553 : larger === "left" ? 774 : 664}
          height={705}
        />
      )}
    </div>
  );
};
