// Code generated by Slice Machine. DO NOT EDIT.

import type * as prismic from "@prismicio/client";

type Simplify<T> = { [KeyType in keyof T]: T[KeyType] };

/**
 * Content for Author documents
 */
interface AuthorDocumentData {
  /**
   * Name field in *Author*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: author.name
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  name: prismic.KeyTextField;

  /**
   * Role field in *Author*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: author.role
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  role: prismic.KeyTextField;

  /**
   * Email field in *Author*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: author.email
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  email: prismic.KeyTextField;

  /**
   * Profile picture field in *Author*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: author.profile_picture
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  profile_picture: prismic.ImageField<never>;

  /**
   * Calendar Link field in *Author*
   *
   * - **Field Type**: Link
   * - **Placeholder**: *None*
   * - **API ID Path**: author.calendar_link
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
   */
  calendar_link: prismic.LinkField;
}

/**
 * Author document from Prismic
 *
 * - **API ID**: `author`
 * - **Repeatable**: `true`
 * - **Documentation**: https://prismic.io/docs/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type AuthorDocument<Lang extends string = string> =
  prismic.PrismicDocumentWithUID<Simplify<AuthorDocumentData>, "author", Lang>;

type DeckDocumentDataSlicesSlice = IntroSlideSlice;

/**
 * Item in *Deck → Company domain*
 */
export interface DeckDocumentDataCompanyDomainItem {
  /**
   * Domain field in *Deck → Company domain*
   *
   * - **Field Type**: Text
   * - **Placeholder**: example : prismic.io
   * - **API ID Path**: deck.company_domain[].domain
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  domain: prismic.KeyTextField;
}

/**
 * Content for Deck documents
 */
interface DeckDocumentData {
  /**
   * Title field in *Deck*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: deck.title
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  title: prismic.RichTextField;

  /**
   * Slice Zone field in *Deck*
   *
   * - **Field Type**: Slice Zone
   * - **Placeholder**: *None*
   * - **API ID Path**: deck.slices[]
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#slices
   */
  slices: prismic.SliceZone<DeckDocumentDataSlicesSlice> /**
   * Company name field in *Deck*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: deck.company_name
   * - **Tab**: Config
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */;
  company_name: prismic.KeyTextField;

  /**
   * Company Logo field in *Deck*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: deck.company_logo
   * - **Tab**: Config
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  company_logo: prismic.ImageField<never>;

  /**
   * Company domain field in *Deck*
   *
   * - **Field Type**: Group
   * - **Placeholder**: *None*
   * - **API ID Path**: deck.company_domain[]
   * - **Tab**: Config
   * - **Documentation**: https://prismic.io/docs/field#group
   */
  company_domain: prismic.GroupField<
    Simplify<DeckDocumentDataCompanyDomainItem>
  >;

  /**
   * Author field in *Deck*
   *
   * - **Field Type**: Content Relationship
   * - **Placeholder**: *None*
   * - **API ID Path**: deck.author
   * - **Tab**: Config
   * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
   */
  author: prismic.ContentRelationshipField<"author"> /**
   * Meta Description field in *Deck*
   *
   * - **Field Type**: Text
   * - **Placeholder**: A brief summary of the page
   * - **API ID Path**: deck.meta_description
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */;
  meta_description: prismic.KeyTextField;

  /**
   * Meta Image field in *Deck*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: deck.meta_image
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  meta_image: prismic.ImageField<never>;

  /**
   * Meta Title field in *Deck*
   *
   * - **Field Type**: Text
   * - **Placeholder**: A title of the page used for social media and search engines
   * - **API ID Path**: deck.meta_title
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  meta_title: prismic.KeyTextField;
}

/**
 * Deck document from Prismic
 *
 * - **API ID**: `deck`
 * - **Repeatable**: `true`
 * - **Documentation**: https://prismic.io/docs/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type DeckDocument<Lang extends string = string> =
  prismic.PrismicDocumentWithUID<Simplify<DeckDocumentData>, "deck", Lang>;

type HomeDocumentDataSlicesSlice = TestSlice;

/**
 * Content for Home documents
 */
interface HomeDocumentData {
  /**
   * Slice Zone field in *Home*
   *
   * - **Field Type**: Slice Zone
   * - **Placeholder**: *None*
   * - **API ID Path**: home.slices[]
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#slices
   */
  slices: prismic.SliceZone<HomeDocumentDataSlicesSlice> /**
   * Meta Description field in *Home*
   *
   * - **Field Type**: Text
   * - **Placeholder**: A brief summary of the page
   * - **API ID Path**: home.meta_description
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */;
  meta_description: prismic.KeyTextField;

  /**
   * Meta Image field in *Home*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: home.meta_image
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  meta_image: prismic.ImageField<never>;

  /**
   * Meta Title field in *Home*
   *
   * - **Field Type**: Text
   * - **Placeholder**: A title of the page used for social media and search engines
   * - **API ID Path**: home.meta_title
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  meta_title: prismic.KeyTextField;
}

/**
 * Home document from Prismic
 *
 * - **API ID**: `home`
 * - **Repeatable**: `false`
 * - **Documentation**: https://prismic.io/docs/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type HomeDocument<Lang extends string = string> =
  prismic.PrismicDocumentWithoutUID<Simplify<HomeDocumentData>, "home", Lang>;

/**
 * Content for Settings documents
 */
interface SettingsDocumentData {
  /**
   * Prismic logo field in *Settings*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: settings.prismic_logo
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  prismic_logo: prismic.ImageField<never>;

  /**
   * Prismic icon field in *Settings*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: settings.prismic_icon
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  prismic_icon: prismic.ImageField<never>;
}

/**
 * Settings document from Prismic
 *
 * - **API ID**: `settings`
 * - **Repeatable**: `false`
 * - **Documentation**: https://prismic.io/docs/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type SettingsDocument<Lang extends string = string> =
  prismic.PrismicDocumentWithoutUID<
    Simplify<SettingsDocumentData>,
    "settings",
    Lang
  >;

export type AllDocumentTypes =
  | AuthorDocument
  | DeckDocument
  | HomeDocument
  | SettingsDocument;

/**
 * Default variation for IntroSlide Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type IntroSlideSliceDefault = prismic.SharedSliceVariation<
  "default",
  Record<string, never>,
  never
>;

/**
 * Slice variation for *IntroSlide*
 */
type IntroSlideSliceVariation = IntroSlideSliceDefault;

/**
 * IntroSlide Shared Slice
 *
 * - **API ID**: `intro_slide`
 * - **Description**: IntroSlide
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type IntroSlideSlice = prismic.SharedSlice<
  "intro_slide",
  IntroSlideSliceVariation
>;

/**
 * Default variation for Test Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type TestSliceDefault = prismic.SharedSliceVariation<
  "default",
  Record<string, never>,
  never
>;

/**
 * Slice variation for *Test*
 */
type TestSliceVariation = TestSliceDefault;

/**
 * Test Shared Slice
 *
 * - **API ID**: `test`
 * - **Description**: Test
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type TestSlice = prismic.SharedSlice<"test", TestSliceVariation>;

declare module "@prismicio/client" {
  interface CreateClient {
    (
      repositoryNameOrEndpoint: string,
      options?: prismic.ClientConfig,
    ): prismic.Client<AllDocumentTypes>;
  }

  namespace Content {
    export type {
      AuthorDocument,
      AuthorDocumentData,
      DeckDocument,
      DeckDocumentData,
      DeckDocumentDataSlicesSlice,
      DeckDocumentDataCompanyDomainItem,
      HomeDocument,
      HomeDocumentData,
      HomeDocumentDataSlicesSlice,
      SettingsDocument,
      SettingsDocumentData,
      AllDocumentTypes,
      IntroSlideSlice,
      IntroSlideSliceVariation,
      IntroSlideSliceDefault,
      TestSlice,
      TestSliceVariation,
      TestSliceDefault,
    };
  }
}
