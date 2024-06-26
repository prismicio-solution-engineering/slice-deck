import { DeckDocumentData, SettingsDocumentData } from "@/prismicio-types";
import { Header } from "./Header";

export const Container = ({
  page,
  settings,
  children,
  type
}: {
  page: DeckDocumentData;
  settings: SettingsDocumentData;
  children: React.ReactNode;
  type?: "default" | "company";
}) => {
  return (
    <section
      className={`w-[1520px] h-[855px] relative rounded-2xl border border-1 border-silver-base flex flex-col overflow-clip`}
    >
      {page && settings && <Header page={page} settings={settings} type={type} />}
      {children}
    </section>
  );
};
