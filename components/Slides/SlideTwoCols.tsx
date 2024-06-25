import React, { ReactElement, cloneElement } from "react";
import clsx from "clsx";

const baseClassNames = "h-full w-[1520px] mb-14 flex flex-row gap-x-10 gap-y-4";

interface SlideTwoColsProps {
  larger?: string;
  overflowRight?: boolean;
  className?: string;
  children: ReactElement | ReactElement[];
}

interface ColProps {
  larger?: string;
  children: React.ReactNode;
  className?: string;
}


export const SlideTwoCols: React.FC<SlideTwoColsProps> = ({
  larger,
  overflowRight = false,
  className,
  children,
}) => {

  const childrenWithProps = React.Children.map(children, (child) =>
    React.isValidElement<ColProps>(child) ? cloneElement(child, { larger }) : child
  );

  className = clsx(
    baseClassNames,
    className,
    overflowRight ? "pl-16" : "px-16"
  );

  return <div className={className}>{childrenWithProps}</div>;
};
