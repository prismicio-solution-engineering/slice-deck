export const Card = ({
  alternateAlignment = false,
  children,
}: {
  alternateAlignment?: boolean;
  children: React.ReactNode
}) => {
  return (
    <div
      className={`h-[62.5%] w-3/12 p-6 border-2 border-primary-blue bg-tertiary-green ${alternateAlignment && "even:self-center"}`}
    >
      <div className="h-full flex flex-col justify-center">
        {children}
      </div>
    </div>
  );
};
