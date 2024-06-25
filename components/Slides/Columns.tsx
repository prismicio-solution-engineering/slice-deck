import clsx from "clsx";

const baseClassNames = "h-full flex flex-col justify-center";

interface ColProps {
  larger?: string;
  children: React.ReactNode;
  className?: string;
}

export const LeftCol: React.FC<ColProps> = ({
  larger,
  children,
  className,
}) => {
  className = clsx(
    baseClassNames,
    larger === "left" ? "w-7/12" : larger === "right" ? "w-5/12" : "w-1/2",
    className
  );

  return <div className={className}>{children}</div>;
};

export const RightCol: React.FC<ColProps> = ({
  larger,
  children,
  className,
}) => {
  className = clsx(
    baseClassNames,
    larger === "left" ? "w-5/12" : larger === "right" ? "w-7/12" : "w-1/2",
    className
  );

  return <div className={className}>{children}</div>;
};
