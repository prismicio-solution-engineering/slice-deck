"use client";

import {
  motion,
  useAnimationFrame,
  useMotionValue,
  useScroll,
  useSpring,
  useTransform,
  useVelocity,
} from "framer-motion";
import { useRef } from "react";

import { wrap } from "@motionone/utils";
import { isFilled } from "@prismicio/client";
import { PrismicNextImage } from "@prismicio/next";
import { Container } from "@/components/Slides/Container";
import { ReferencesSliceG2Badges } from "@/prismicio-types";
import { Context } from "@/utils/GlobalTypes";
import { Headings } from "@/components/Slides/Headings";
import { SlideFullWidth } from "@/components/Slides/SlideFullWidth";

const BadgeRow = ({
  children,
  baseVelocity,
}: {
  baseVelocity: number;
  children: React.ReactNode;
}) => {
  const baseX = useMotionValue(0);
  const { scrollY } = useScroll();
  const scrollVelocity = useVelocity(scrollY);
  const smoothVelocity = useSpring(scrollVelocity, {
    damping: 50,
    stiffness: 400,
  });
  const velocityFactor = useTransform(smoothVelocity, [0, 1000], [0, 5], {
    clamp: false,
  });

  const x = useTransform(baseX, (v) => `${wrap(-20, -45, v)}%`);

  const directionFactor = useRef<number>(1);

  useAnimationFrame((t, delta) => {
    let moveBy = directionFactor.current * baseVelocity * (delta / 1000);

    if (velocityFactor.get() < 0) {
      directionFactor.current = -1;
    } else if (velocityFactor.get() > 0) {
      directionFactor.current = 1;
    }

    moveBy += directionFactor.current * moveBy * velocityFactor.get();

    baseX.set(baseX.get() + moveBy);
  });

  return (
    <div className="overflow-hidden flex">
      <motion.div className="flex" style={{ x }}>
        <span className="flex">{children}</span>
        <span className="flex">{children}</span>
        <span className="flex">{children}</span>
        <span className="flex">{children}</span>
      </motion.div>
    </div>
  );
};

const G2Badges = ({
  slice,
  context,
}: {
  slice: ReferencesSliceG2Badges;
  context: Context;
}) => {
  const half = Math.ceil(slice.primary.badges.length / 2);
  const firstHalf = slice.primary.badges.slice(0, half);
  const secondHalf = slice.primary.badges.slice(-half);

  return (
    <Container
      page={context.page}
      settings={context.settings}
      theme={slice.primary.theme === "slider theme" ? context.page.theme : slice.primary.theme}
    >
      <SlideFullWidth className="justify-center">
        <div className="sm:grid sm:grid-cols-12 gap-6 items-center">
          <div className="col-span-6 flex flex-col">
            <Headings
              eyebrow={slice.primary.eyebrow}
              title={slice.primary.title}
              alignTop
              titleSize="!text-4xl"
            />
            {isFilled.group(slice.primary.numbers) && (
              <>
                <hr className="col-span-6 mt-8 border-t-2 border-gray-base" />
                <div className="col-span-6 flex flex-col xl:grid xl:grid-cols-2 mt-8 gap-6">
                  {slice.primary.numbers.map((number, index) => (
                    <div
                      key={index}
                      className="xl:col-span-1 flex items-center gap-6"
                    >
                      <p className="w-20 text-4xl sm:w-28 h-20 sm:h-28 rounded-xl shrink-0 flex items-center justify-center bg-quaternary-purple text-primary-purple">
                        {number.number}
                      </p>
                      <p className="font-copy text-2xl">{number.text}</p>
                    </div>
                  ))}
                </div>
              </>
            )}
          </div>
          <div className="col-span-6 relative sm:pl-12 mt-12 sm:mt-0">
            <div className="absolute z-10 top-0 bottom-0 left-0 sm:left-12 bg-gradient-to-r to-transparent w-[35%] from-white" />
            <div className="absolute z-10 top-0 bottom-0 right-0 left-auto bg-gradient-to-l to-transparent w-[35%] from-white" />
            <BadgeRow baseVelocity={-0.5}>
              {firstHalf.map((badge, index) => (
                <div
                  key={index}
                  className="w-44 h-44 shrink-0 flex items-center justify-center"
                >
                  <PrismicNextImage
                    className="w-auto h-full"
                    field={badge.badge}
                  />
                </div>
              ))}
            </BadgeRow>
            <div className="h-8" />
            <BadgeRow baseVelocity={0.5}>
              {secondHalf.map((badge, index) => (
                <div
                  key={index}
                  className="w-44 h-44 shrink-0 flex items-center justify-center"
                >
                  <PrismicNextImage
                    className="w-auto h-full"
                    field={badge.badge}
                  />
                </div>
              ))}
            </BadgeRow>
          </div>
        </div>
      </SlideFullWidth>
    </Container>
  );
};

export default G2Badges;
