import { PrismicNextLink } from "@prismicio/next";
import {
  PrismicRichText as BasePrismicRichText,
  JSXMapSerializer,
} from "@prismicio/react";
import type * as prismic from "@prismicio/client";
import clsx from "clsx";

/** @type {import("@prismicio/react").JSXMapSerializer} */

export function GlobalPrismicRichText({
  components,
  companyName,
  classNames,
  theme,
  ...props
}: {
  components?: JSXMapSerializer;
  field: prismic.RichTextField;
  companyName?: string;
  classNames?: string;
  theme?: "white" | "orange" | "pink" | "green" | "purple" | "blue";
}) {
  const textColor =
    // theme === "white"
    //   ? "text-gray-darker"
    //    : theme === "green"
    // ? "text-primary-purple"
    // : theme === "pink"
    // ? "text-primary-blue"
    theme ? "text-primary-pink" : "";

  const defaultComponents: JSXMapSerializer = {
    heading1: ({ children }) => (
      <h2
        className={clsx(
          `text-8xl font-headings font-medium break-words`,
          classNames
        )}
      >
        {children}
      </h2>
    ),
    heading2: ({ children }) => (
      <h2
        className={clsx(
          `text-6xl mb-4 font-headings font-semibold break-words`,
          classNames
        )}
      >
        {children}
      </h2>
    ),
    heading3: ({ children }) => (
      <h3
        className={clsx(
          `text-5xl font-medium font-headings mt-4 first:mt-0 break-words`,
          classNames
        )}
      >
        {children}
      </h3>
    ),
    heading4: ({ children }) => (
      <h4
        className={clsx(
          `text-4xl font-medium font-headings mt-4 first:mt-0 break-words`,
          classNames
        )}
      >
        {children}
      </h4>
    ),
    preformatted: ({ children }) => (
      <pre
        className={clsx(
          "font-code mt-3 mb-7 p-4 text-sm text-silver-light bg-gray-dark border-gray-darker rounded-lg shadow-lg whitespace-break-spaces",
          classNames
        )}
      >
        <code>{children}</code>
      </pre>
    ),
    paragraph: ({ children }) => (
      <p
        className={clsx(
          "font-copy text-2xl mb-2 text-gray-darker break-words font-normal",
          classNames
        )}
      >
        {children}
      </p>
    ),
    list: ({ children }) => (
      <ul
        className={clsx(
          `ml-4 my-2 break-words font-copy text-2xl font-normal marker:${textColor}`,
          classNames
        )}
      >
        {children}
      </ul>
    ),
    oList: ({ children }) => (
      <ol
        className={clsx(
          `ml-4 my-2 break-words font-copy text-2xl font-normal marker:${textColor}`,
          classNames
        )}
      >
        {children}
      </ol>
    ),
    listItem: ({ children }) => (
      <li
        className={clsx(
          "list-disc ml-5 pl-2 last:mb-0 list-outside text-gray-darker",
          classNames
        )}
      >
        {children}
      </li>
    ),
    oListItem: ({ children }) => (
      <li
        className={clsx(
          "list-decimal ml-5 pl-2 last:mb-0 list-outside text-gray-darker",
          classNames
        )}
      >
        {children}
      </li>
    ),
    hyperlink: ({ children, node }) => (
      <PrismicNextLink
        field={node.data}
        className={clsx(
          `font-copy text-2xl underline underline-offset-8 hover:underline-offset-4 transition-all duration-300 ease-in-out break-words ${textColor}`,
          classNames
        )}
      >
        {children}
      </PrismicNextLink>
    ),
    label: ({ node, children }) => {
      return (
        <>
          {node.data.label === "highlight" && (
            <span className={clsx("font-semibold", textColor, classNames)}>
              {children}
            </span>
          )}
          {node.data.label === "Company Name" && (
            <span className={clsx(classNames)}>
              {companyName ? companyName : "Your company"}
            </span>
          )}
        </>
      );
    },
  };

  return (
    <BasePrismicRichText
      components={{
        ...defaultComponents,
        ...components,
      }}
      {...props}
    />
  );
}
