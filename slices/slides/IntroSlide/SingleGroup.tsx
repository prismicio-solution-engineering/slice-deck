import { IntroSlideSliceSingleGroup } from "@/prismicio-types";
import { introComponents } from ".";
import { PrismicNextImage } from "@prismicio/next";

const SingleGroup = ({
  slice,
}: {
  slice: IntroSlideSliceSingleGroup;
}): JSX.Element => {
  return (
    <div className="w-full flex flex-row gap-x-16 justify-around">
      {slice.primary.logos.map((item, idx) => (
        <PrismicNextImage
          key={idx}
          field={item.logo}
          height={40}
          imgixParams={{
            monochrome: "AAAAAA",
          }}
          className="object-contain"
        />
      ))}
    </div>
  );
};

export default SingleGroup;
