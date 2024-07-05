import clsx from "clsx";

const baseClassNames = "p-6 border flex flex-col items-center";

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
    alternateAlignment && "even:self-end",
    className
  );

  return <div className={className}>{children}</div>;
};
