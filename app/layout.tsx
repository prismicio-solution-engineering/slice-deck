import "./globals.css";
import { PrismicPreview } from "@prismicio/next";
import { repositoryName } from "@/prismicio";
import clsx from "clsx";
import { headingsFont, copyFont, monoFont } from "@/assets/fonts";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={clsx(
          "font-copy font-medium antialiased",
          `${headingsFont.variable} ${copyFont.variable} ${monoFont.variable}`
        )}
      >
        {children}
        <PrismicPreview repositoryName={repositoryName} />
      </body>
    </html>
  );
}
