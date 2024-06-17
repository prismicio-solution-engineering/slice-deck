import { DeckDocumentData, SettingsDocumentData } from "@/prismicio-types";
import { PrismicNextImage } from "@prismicio/next";
import { Header } from "./Header";

export const Container = ({
  page,
  settings,
  children,
}: {
  page: DeckDocumentData;
  settings: SettingsDocumentData;
  children: React.ReactNode;
}) => {
  return (
    <section
      className={`w-[1520px] h-[855px] relative rounded-2xl border border-1 border-silver-base flex flex-col`}
    >
      <Header page={page} settings={settings} />
      {children}
    </section>
  );
};
