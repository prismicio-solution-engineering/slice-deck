"use client";

import { GlobalPrismicRichText } from "@/components/GlobalPrismicRichText";
import { ReferencesSliceShowcasedWebsites } from "@/prismicio-types";
import { Container } from "@/components/Slides/Container";
import { Context } from "@/utils/GlobalTypes";
import { PrismicNextImage, PrismicNextLink } from "@prismicio/next";
import { SlideFullWidth } from "@/components/Slides/SlideFullWidth";
import { Button } from "@/components/Button";
import { Card } from "@/components/Card";
import { isFilled } from "@prismicio/client";
import { useEffect, useState } from "react";

const ShowcasedWebsites = ({
  slice,
  context,
}: {
  slice: ReferencesSliceShowcasedWebsites;
  context: Context;
}): JSX.Element => {
  const [isShowing, setIsShowing] = useState(false);

  useEffect(() => {
    setIsShowing(true);
  }, []);

  return (
    <Container
      page={context.page}
      settings={context.settings}
      theme={slice.primary.theme === "slider theme" ? context.page.theme : slice.primary.theme}
    >
      <SlideFullWidth className="flex flex-row justify-center items-center">
        <div className="font-headings text-3xl font-semibold text-primary-pink">
          {slice.primary.eyebrow}
        </div>
        <GlobalPrismicRichText field={slice.primary.title} />
        <div className="flex flex-row gap-x-32">
          {slice.primary.stories.map((item, idx) => (
            <div key={idx} className="w-1/3 flex flex-col gap-y-4">
              <Card
                key={idx}
                className="w-full h-full flex flex-col gap-y-8 !p-0 text-center border-none"
              >
                {isFilled.image(item.website_screenshot) && (
                  <PrismicNextLink field={item.link} className="relative">
                    <PrismicNextImage
                      field={item.website_screenshot}
                      className="w-full rounded-xl object-contain bg-gray-darker opacity-100 scale-100 hover:opacity-40 transition-all ease-in-out duration-500"
                    />
                    <div className="absolute w-full h-full rounded-xl opacity-0 hover:opacity-100 align-middle backdrop-blur-lg bg-opacity-0 hover:bg-opacity-50 bg-gray-dark text-xl top-0 flex flex-row justify-center transition-all ease-in-out duration-500">
                      <div className="p-4 mt-12 text-white">
                        "{item.user_quote}"
                      </div>
                    </div>
                  </PrismicNextLink>
                )}
              </Card>
              <Button variant="link" field={item.link} className="text-center">
                {item.label}
              </Button>
            </div>
          ))}
        </div>
      </SlideFullWidth>
    </Container>
  );
};

export default ShowcasedWebsites;
