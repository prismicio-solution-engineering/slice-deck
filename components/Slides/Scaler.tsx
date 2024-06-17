"use client";
import React, { useEffect, useState } from "react";

const Scaler = ({ children }: { children: React.ReactNode }) => {
  const [scale, setScale] = useState(0);

  const adjustScale = () => {
    const scaleValue = Math.min(
      window.innerWidth / 1520,
      window.innerHeight / 855,
      1.3
    );
    setScale(scaleValue * 0.9);
  };

  useEffect(() => {
    adjustScale();
    window.addEventListener("resize", adjustScale);

    return () => window.removeEventListener("resize", adjustScale);
  }, []);

  return (
    <div
      className="relative w-full max-w-full overflow-hidden"
      style={{ paddingTop: "56.25%" }}
    >
      <div
        className="absolute top-0 left-0 right-0 bottom-0 flex flex-col items-center"
        style={{ transform: `scale(${scale})` }}
      >
        {children}
      </div>
    </div>
  );
};

export default Scaler;
