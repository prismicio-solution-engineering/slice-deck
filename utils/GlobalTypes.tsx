import { DeckDocumentData, SettingsDocumentData } from "@/prismicio-types";

export type Context = {
  page: DeckDocumentData;
  settings: SettingsDocumentData;
};
