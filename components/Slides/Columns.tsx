export const LeftCol = ({
  larger,
  children,
}: {
  larger?: string;
  children: React.ReactNode;
}) => {
  return (
    <div
      className={`${larger === "left" ? "w-7/12" : larger === "right" ? "w-5/12" : "w-1/2"} border-2 border-tertiary-green`}
    >
      {children}
    </div>
  );
};

export const RightCol = ({
  larger,
  children,
}: {
  larger?: string;
  children: React.ReactNode;
}) => {
  return (
    <div
      className={`${larger === "left" ? "w-5/12" : larger === "right" ? "w-7/12" : "w-1/2"} border-2 border-tertiary-purple`}
    >
      {children}
    </div>
  );
};
