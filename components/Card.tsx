import clsx from "clsx";

const baseClassNames = "w-3/12 p-6 border flex flex-col items-center";

export const Card = ({
  alternateAlignment = false,
  children,
  className,
}: {
  alternateAlignment?: boolean;
  children: React.ReactNode;
  className?: string;
}) => {
  className = clsx(
    baseClassNames,
    alternateAlignment && "even:self-center",
    className
  );

  return <div className={className}>{children}</div>;
};
