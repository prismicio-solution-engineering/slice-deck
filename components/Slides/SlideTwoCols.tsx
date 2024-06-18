import React, { cloneElement } from "react";

export const SlideTwoCols = ({
  larger,
  overflowRight = false,
  children,
}: {
  larger?: string;
  overflowRight?: boolean;
  children: React.ReactNode;
}) => {
  // Clone children and pass the 'larger' prop to them
  const childrenWithProps = React.Children.map(children, (child) =>
    React.isValidElement(child) ? cloneElement(child, { larger }) : child
  );

  return (
    <div
      className={`h-full mb-14 ${overflowRight ? "pl-16" : "px-16"} flex flex-row gap-x-10 gap-y-4`}
    >
      {childrenWithProps}
    </div>
  );
};
