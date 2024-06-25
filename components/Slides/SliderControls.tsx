"use client";
import { ChevronRightIcon, ChevronLeftIcon } from "@heroicons/react/24/outline";
import React, { useEffect, useState } from "react";
export const SliderControls = ({ children }: { children: React.ReactNode }) => {
  const sliderContainerRef = React.useRef<HTMLDivElement>(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  const totalSlides = React.Children.count(children);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
    if (sliderContainerRef.current) {
      const slideWidth = sliderContainerRef.current.scrollWidth / totalSlides;
      const newScrollLeft = slideWidth * index;
      sliderContainerRef.current.scrollTo({
        left: newScrollLeft,
        behavior: "smooth",
      });
    }
  };

  const nextSlide = () => {
    if (currentSlide < totalSlides - 1) {
      goToSlide(currentSlide + 1);
    }
  };

  const prevSlide = () => {
    if (currentSlide > 0) {
      goToSlide(currentSlide - 1);
    }
  };

  // Effect to add and remove keyboard event listeners
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "ArrowRight") {
        nextSlide();
      } else if (event.key === "ArrowLeft") {
        prevSlide();
      }
    };

    // Add event listener
    window.addEventListener("keydown", handleKeyDown);

    // Remove event listener on cleanup
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [currentSlide, totalSlides]); // Dependencies

  return (
    <div className="relative w-full">
      <div className="px-8 overflow-hidden">
        <button
          onClick={prevSlide}
          className="absolute -left-4 z-10 text-silver-darker block"
          style={{ top: "50%", transform: "translateY(-50%)" }}
          aria-label="Scroll left"
        >
          <ChevronLeftIcon className="h-10 w-10" />
        </button>
        <div
          ref={sliderContainerRef}
          className="flex overflow-x-hidden overflow-y-clip scroll-smooth scrollbar-hide no-scrollbar max-w-[1520px] mx-auto"
        >
          {children}
        </div>
        <button
          onClick={nextSlide}
          className="absolute -right-4 z-10 text-silver-darker block"
          style={{ top: "50%", transform: "translateY(-50%)" }}
          aria-label="Scroll right"
        >
          <ChevronRightIcon className="h-10 w-10" />
        </button>
      </div>
      <div className="absolute w-full flex justify-center bottom-4">
        {Array.from({ length: totalSlides }).map((_, index) => (
          <button
            key={index}
            className={`h-3 w-3 mx-1 rounded-full ${index === currentSlide ? "bg-silver-darker" : "bg-silver-base"} focus:outline-none`}
            onClick={() => goToSlide(index)}
          ></button>
        ))}
      </div>
    </div>
  );
};
