import { DeckDocumentData, SettingsDocumentData } from "@/prismicio-types";
import { PrismicNextImage } from "@prismicio/next";
import { GlobalPrismicRichText } from "../GlobalPrismicRichText";

const Default = ({
  page,
  settings,
}: {
  page: DeckDocumentData;
  settings: SettingsDocumentData;
}) => {
  return (
    <div className="flex justify-between items-center h-fit">
      <div className="flex flex-row gap-x-8 items-center">
        <PrismicNextImage
          field={settings.prismic_icon}
          height={40}
          className="h-full object-contain rounded-xl"
        />
        <GlobalPrismicRichText field={page.title} classNames="!text-2xl" />
      </div>
      <p className="text-center text-silver-darker text-lg">
        Copyright Prismic · All Rights Reserved
      </p>
    </div>
  );
};
const WithCompanyLogo = ({
  page,
  settings,
}: {
  page: DeckDocumentData;
  settings: SettingsDocumentData;
}) => {
  return (
    <div className="flex justify-between items-center h-fit">
      <PrismicNextImage
        field={settings.prismic_logo}
        height={40}
        className="h-full object-contain rounded-xl"
      />
      <GlobalPrismicRichText field={page.title} classNames="text-xl" />
      <p className="text-center text-silver-darker text-xl">
        Copyright Prismic · All Rights Reserved
      </p>
      <PrismicNextImage
        field={page.company_logo}
        height={40}
        className="h-full object-contain rounded-xl"
      />
    </div>
  );
};

export const Header = ({
  page,
  settings,
  type,
}: {
  page: DeckDocumentData;
  settings: SettingsDocumentData;
  type?: "default" | "company";
}) => {
  return (
    <div className="w-full h-20 p-8">
      {type === "company" ? (
        <WithCompanyLogo page={page} settings={settings} />
      ) : type === "default" ? (
        <Default page={page} settings={settings} />
      ) : (
        <Default page={page} settings={settings} />
      )}
    </div>
  );
};
