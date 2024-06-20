import React, { cloneElement } from "react";
import clsx from "clsx";

const baseClassNames = "h-full w-[1520px] mb-14 flex flex-row gap-x-10 gap-y-4";

export const SlideTwoCols = ({
  larger,
  overflowRight = false,
  className,
  children,
}: {
  larger?: string;
  overflowRight?: boolean;
  className?: string;
  children: React.ReactNode;
}) => {
  // Clone children and pass the 'larger' prop to them
  const childrenWithProps = React.Children.map(children, (child) =>
    React.isValidElement(child) ? cloneElement(child, { larger }) : child
  );

  className = clsx(
    baseClassNames,
    className,
    overflowRight ? "pl-16" : "px-16"
  );

  return <div className={className}>{childrenWithProps}</div>;
};
