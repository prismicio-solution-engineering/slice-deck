import { DeckDocumentData, SettingsDocumentData } from "@/prismicio-types";
import { Header } from "./Header";

export const Container = ({
  page,
  settings,
  children,
  type,
  theme,
  copyright = true,
}: {
  page: DeckDocumentData;
  settings: SettingsDocumentData;
  children: React.ReactNode;
  type?: "default" | "company";
  theme?:
    | "white"
    | "orange"
    | "pink"
    | "green"
    | "purple"
    | "blue"
    | "slider theme";
  copyright?: boolean;
}) => {
  const themeColor = theme === "white" ? "bg-white" : `bg-quaternary-${theme}`;

  return (
    <section
      className={`w-[1520px] h-[855px] relative rounded-2xl border border-1 border-silver-base flex flex-col overflow-clip ${themeColor}`}
    >
      {page && settings && (
        <Header
          page={page}
          settings={settings}
          type={type}
          copyright={copyright}
        />
      )}
      {children}
    </section>
  );
};
