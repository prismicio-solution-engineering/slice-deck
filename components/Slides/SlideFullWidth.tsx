import { DeckDocumentData, SettingsDocumentData } from "@/prismicio-types";

export const SlideFullWidth = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="h-full w-full mb-14 px-16 flex gap-x-10 gap-y-4">
      {children}
    </div>
  );
};
