import { IntroSlideSliceDefault } from "@/prismicio-types";
import { PrismicNextImage } from "@prismicio/next";

const ThreeGroups = ({
  slice,
}: {
  slice: IntroSlideSliceDefault;
}): JSX.Element => {
  return (
    <div className="w-full flex flex-row gap-x-16 justify-evenly">
      {slice.primary.logos.map((item, idx) => (
        <div key={idx} className="w-1/3">
          <p className="font-copy text-xl uppercase text-center pb-1 text-gray-darker break-words font-normal">
            {item.group_name}
          </p>

          <div className="flex flex-row flex-wrap gap-x-2 justify-center">
            <PrismicNextImage
              field={item.logo_1}
              height={40}
              className="object-contain"
            />
            <PrismicNextImage
              field={item.logo_2}
              className="object-contain"
              height={40}

            />
            <PrismicNextImage
              field={item.logo_3}
              className="object-contain"
              height={40}

            />
            <PrismicNextImage
              field={item.logo_4}
              className="object-contain"
              height={40}

            />
            <PrismicNextImage
              field={item.logo_5}
              className="object-contain"
              height={40}

            />
            <PrismicNextImage
              field={item.logo_6}
              className="object-contain"
              height={40}

            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default ThreeGroups;
