import { PrismicNextLink } from "@prismicio/next";
import {
  PrismicRichText as BasePrismicRichText,
  JSXMapSerializer,
} from "@prismicio/react";
import type * as prismic from "@prismicio/client";
import clsx from "clsx";

/** @type {import("@prismicio/react").JSXMapSerializer} */

// TODO : Color to add as prop and specific alignment so we don't have to create a component
const defaultComponents: JSXMapSerializer = {
  heading1: ({ children }) => (
    <h2
      className={`text-8xl font-headings font-medium text-gray-darker break-words`}
    >
      {children}
    </h2>
  ),
  heading2: ({ children }) => (
    <h2
      className={`text-4xl mb-4 font-headings font-medium text-gray-darker break-words`}
    >
      {children}
    </h2>
  ),
  heading3: ({ children }) => (
    <h3 className="text-3xl font-medium font-headings text-gray-darker mt-4 first:mt-0 break-words">
      {children}
    </h3>
  ),
  heading4: ({ children }) => (
    <h4
      className={`text-2xl font-medium font-headings text-gray-darker mt-4  first:mt-0 break-words`}
    >
      {children}
    </h4>
  ),
  preformatted: ({ children }) => (
    <pre className="font-code mt-3 mb-7 p-4 text-sm text-silver-light bg-gray-dark border-gray-darker rounded-lg shadow-lg whitespace-break-spaces">
      <code>{children}</code>
    </pre>
  ),
  paragraph: ({ children }) => (
    <p className="font-copy text-lg mb-2 text-gray-darker break-words font-normal">
      {children}
    </p>
  ),
  list: ({ children }) => (
    <ul className="my-2 break-words font-copy text-lg font-normal">
      {children}
    </ul>
  ),
  oList: ({ children }) => (
    <ol className="my-2 break-words font-copy text-lg font-normal">
      {children}
    </ol>
  ),
  listItem: ({ children }) => (
    <li className="list-disc ml-5 pl-2 last:mb-0 list-outside text-gray-darker">
      {children}
    </li>
  ),
  oListItem: ({ children }) => (
    <li className="list-decimal ml-5 pl-2 last:mb-0 list-outside text-gray-darker">
      {children}
    </li>
  ),
  hyperlink: ({ children, node }) => (
    <PrismicNextLink
      field={node.data}
      className="text-gray-darker font-copy text-lg underline underline-offset-8 hover:underline-offset-4 transition-all duration-300 ease-in-out break-words"
    >
      {children}
    </PrismicNextLink>
  ),
  // label: ({ node, children }) => {
  //   return (
  //     <>
  //       {node.data.label === "highlight" && (
  //         <span className={`text-primary-orange font-semibold`}>
  //           {children}
  //         </span>
  //       )}
  //       {node.data.label === "Company Name" && <span>{children}</span>}, -{" "}
  //     </>
  //   );
  // },
};

export function GlobalPrismicRichText({
  components,
  companyName,
  classNames,
  ...props
}: {
  components?: JSXMapSerializer;
  field: prismic.RichTextField;
  companyName?: string;
  classNames?: string;
}) {
  return (
    <BasePrismicRichText
      components={{
        heading1: ({ children }) => (
          <h2
            className={`text-8xl font-headings font-medium text-gray-darker break-words ${classNames}`}
          >
            {children}
          </h2>
        ),
        heading2: ({ children }) => (
          <h2
            className={`text-4xl mb-4 font-headings font-medium text-gray-darker break-words ${classNames}`}
          >
            {children}
          </h2>
        ),
        heading3: ({ children }) => (
          <h3
            className={`text-3xl font-medium font-headings text-gray-darker mt-4 first:mt-0 break-words ${classNames}`}
          >
            {children}
          </h3>
        ),
        heading4: ({ children }) => (
          <h4
            className={`text-2xl font-medium font-headings text-gray-darker mt-4  first:mt-0 break-words ${classNames}`}
          >
            {children}
          </h4>
        ),
        preformatted: ({ children }) => (
          <pre
            className={`font-code mt-3 mb-7 p-4 text-sm text-silver-light bg-gray-dark border-gray-darker rounded-lg shadow-lg whitespace-break-spaces ${classNames}`}
          >
            <code>{children}</code>
          </pre>
        ),
        paragraph: ({ children }) => (
          <p
            className={clsx("font-copy text-lg mb-2 text-gray-darker break-words font-normal", classNames)}
          >
            {children}
          </p>
        ),
        list: ({ children }) => (
          <ul
            className={`my-2 break-words font-copy text-lg font-normal ${classNames}`}
          >
            {children}
          </ul>
        ),
        oList: ({ children }) => (
          <ol
            className={`my-2 break-words font-copy text-lg font-normal ${classNames}`}
          >
            {children}
          </ol>
        ),
        listItem: ({ children }) => (
          <li
            className={`list-disc ml-5 pl-2 last:mb-0 list-outside text-gray-darker ${classNames}`}
          >
            {children}
          </li>
        ),
        oListItem: ({ children }) => (
          <li
            className={`list-decimal ml-5 pl-2 last:mb-0 list-outside text-gray-darker ${classNames}`}
          >
            {children}
          </li>
        ),
        hyperlink: ({ children, node }) => (
          <PrismicNextLink
            field={node.data}
            className={`text-gray-darker font-copy text-lg underline underline-offset-8 hover:underline-offset-4 transition-all duration-300 ease-in-out break-words ${classNames}`}
          >
            {children}
          </PrismicNextLink>
        ),
        label: ({ node, children }) => {
          return (
            <>
              {node.data.label === "highlight" && (
                <span className={`text-secondary-pink font-semibold`}>
                  {children}
                </span>
              )}
              {node.data.label === "Company Name" && (
                <span>{companyName ? companyName : "Your company's"}</span>
              )}
            </>
          );
        },
        ...components,
      }}
      {...props}
    />
  );
}
