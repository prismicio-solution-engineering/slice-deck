import { DeckDocumentData, SettingsDocumentData } from "@/prismicio-types";
import { PrismicNextImage } from "@prismicio/next";

export const Header = ({
  page,
  settings,
}: {
  page: DeckDocumentData;
  settings: SettingsDocumentData;
}) => {
  return (
    <div className="w-full h-20 px-16">
      {/* V1 */}
      {/* <div className="flex justify-between items-center h-full">
          <PrismicNextImage
            field={settings.prismic_logo}
            height={80}
            className="h-full object-contain rounded-xl"
          />
          <PrismicNextImage
            field={page.company_logo}
            height={80}
            className="h-full object-contain rounded-xl "
          />
        </div>
 */}

      {/* V2 */}
      {/* 
        <div className="flex justify-start items-center h-full">
          <PrismicNextImage
            field={settings.prismic_logo}
            height={80}
            className="h-full object-contain rounded-xl "
          />
        </div>
*/}

      {/* V3 */}
      <div className="flex justify-between items-center h-20">
        <PrismicNextImage
          field={settings.prismic_icon}
          height={40}
          className="h-full object-contain rounded-xl"
        />
      <p className="text-center text-gray-base mb-12">Copyright Prismic · All Rights Reserved</p>

      </div>
    </div>
  );
};
