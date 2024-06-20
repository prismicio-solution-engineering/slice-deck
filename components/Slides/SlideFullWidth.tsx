import clsx from "clsx";

const baseClassNames = "h-full w-[1520px] mb-14 px-16 flex flex-col gap-x-10 gap-y-4"

export const SlideFullWidth = ({ children, className }: { children: React.ReactNode, className?: string; }) => {
  className = clsx(
    baseClassNames,
    className
  );

  return (
    <div className={className}>
      {children}
    </div>
  );
};
