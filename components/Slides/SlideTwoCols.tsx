
export const SlideTwoCols = ({
  larger,
  overflowRight = false,
}: {
  larger?: string;
  overflowRight?: boolean;
}) => {
  return (
    <div
      className={`h-full mb-14 ${overflowRight ? "pl-16" : "px-16"} flex flex-row gap-x-10 gap-y-4`}
    >
      <div
        className={`${larger === "left" ? "w-7/12" : larger === "right" ? "w-5/12" : "w-1/2"} border-2 border-tertiary-green`}
      >
        <p className="font-copy text-2xl text-gray-base break-words font-normal">
          Text component
        </p>
      </div>
      <div
        className={`${larger === "left" ? "w-5/12" : larger === "right" ? "w-7/12" : "w-1/2"} border-2 border-tertiary-purple`}
      >
        <p className="font-copy text-2xl text-gray-base break-words font-normal">
          Text or Image component
        </p>
      </div>
    </div>
  );
};
