import clsx from "clsx";

const baseClassNames = "h-full flex flex-col justify-center";

export const LeftCol = ({
  larger,
  children,
  className,
}: {
  larger?: string;
  children: React.ReactNode;
  className?: string;
}) => {
  className = clsx(
    baseClassNames,
    larger === "left" ? "w-7/12" : larger === "right" ? "w-5/12" : "w-1/2",
    className
  );

  return <div className={className}>{children}</div>;
};

export const RightCol = ({
  larger,
  children,
  className,
}: {
  larger?: string;
  children: React.ReactNode;
  className?: string;
}) => {
  className = clsx(
    baseClassNames,
    larger === "left" ? "w-5/12" : larger === "right" ? "w-7/12" : "w-1/2",
    className
  );

  return <div className={className}>{children}</div>;
};
