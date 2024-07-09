"use client";

import { GlobalPrismicRichText } from "@/components/GlobalPrismicRichText";
import { ReferencesSliceShowcasedWebsites } from "@/prismicio-types";
import { Container } from "@/components/Slides/Container";
import { Context } from "../IntroSlide";
import { PrismicNextImage } from "@prismicio/next";
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
  const [heroHasLoaded, setHeroHasLoaded] = useState(false);

  useEffect(() => {
    setIsShowing(true);
  }, []);

  return (
    <Container
      page={context.page}
      settings={context.settings}
      theme={slice.primary.theme}
    >
      <SlideFullWidth className="flex flex-row justify-center items-center">
        <div className="font-headings text-3xl font-semibold text-primary-pink">
          {slice.primary.eyebrow}
        </div>
        <GlobalPrismicRichText field={slice.primary.title} />
        <div className="flex flex-row gap-x-32">
          {slice.primary.stories.map((item, idx) => (
            <div key={idx} className="w-1/3 flex flex-col justify-between">
              <Card
                key={idx}
                className="w-full h-full block rounded-2xl grow p-3 pb-4 transition-colors border-2 relative gap-y-8 text-center bg-white border-tertiary-purple hover:bg-tertiary-purple bg-quaternary-purple"
              >
                <div className="relative">
                  <div className="absolute inset-0 rounded-xl shadow-website-screenshot" />
                  <div className="aspect-w-16 aspect-h-12 rounded-lg overflow-hidden relative bg-gray-F7"></div>
                  {isFilled.image(item.website_screenshot) && (
                    <PrismicNextImage
                      field={item.website_screenshot}
                      fill
                      onLoadingComplete={() => setHeroHasLoaded(true)}
                      sizes="(max-width: 639px) 100vw, (max-width: 1023px) 50vw, 33vw"
                      className={`rounded-xl ${
                        heroHasLoaded
                          ? "opacity-100 scale-100"
                          : "opacity-0 scale-105"
                      } transition-all ease-in-out duration-500 object-contain`}
                    />
                  )}
                </div>
                <Button
                  variant="link"
                  field={item.link}
                  className="text-primary-pink"
                >
                  {item.label}
                </Button>
              </Card>
            </div>
          ))}
        </div>
      </SlideFullWidth>
    </Container>
  );
};

export default ShowcasedWebsites;
