import { DeckDocumentData, SettingsDocumentData } from "@/prismicio-types";

export const Card = ({
  alternateAlignment = false,
}: {
  alternateAlignment?: boolean;
}) => {
  return (
    <div
      className={`h-[62.5%] w-3/12 p-6 border-2 border-primary-blue bg-tertiary-green ${alternateAlignment && "even:self-center"}`}
    >
      <div className="h-full flex flex-col justify-center">
        <p className="font-headings text-xl text-gray-base break-words font-normal">
          Title
        </p>
        <p className="font-copy text-lg text-gray-base break-words font-normal">
          Text component
        </p>
      </div>
    </div>
  );
};
