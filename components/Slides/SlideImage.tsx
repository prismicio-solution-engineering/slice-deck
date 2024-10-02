import { ImageField } from "@prismicio/client";
import { PrismicNextImage } from "@prismicio/next";
import clsx from "clsx";

const baseClassNames = "rounded-md";

// Full width image - 1500x660
//     Half - 664x705 or overflow 695x705
//     Larger left - 774x705 or overflow 811x705
//     Larger right - 553x705 or overflow 579x705

export function SlideImage({
  field,
  larger,
  fullWidth,
  overflowRight = false,
  overflowLeft = false,
  border = false,
  contain,
  cover,
  className,
  ...props
}: {
  field: ImageField;
  larger?: string;
  overflowRight?: boolean;
  overflowLeft?: boolean;
  fullWidth?: boolean;
  className?: string;
  border?: boolean;
  contain?: boolean;
  cover?: boolean;
}) {
  // TODO : if border, object-cover ? shadows everywhere ?
  className = clsx(
    baseClassNames,
    className,
    border && "border-2 border-gray-darker",
    contain && "object-contain",
    cover && "object-cover"
  );

  if (fullWidth) {
    return (
      <PrismicNextImage
        field={field}
        width={1500}
        height={660}
        className={className}
        {...props}
      />
    );
  }

  if (overflowRight) {
    return (
      <PrismicNextImage
        field={field}
        width={larger === "right" ? 811 : larger === "left" ? 579 : 695}
        height={705}
        className={clsx(className, "border-r-0")}
        {...props}
      />
    );
  } else if (overflowLeft) {
    return (
      // Methodology variation User
      <PrismicNextImage
        field={field}
        width={695}
        height={705}
        className={clsx(className, "border-l-0")}
        {...props}
      />
    );
  } else {
    return (
      <PrismicNextImage
        field={field}
        width={larger === "right" ? 774 : larger === "left" ? 553 : 664}
        height={705}
        className={className}
        {...props}
      />
    );
  }
}
