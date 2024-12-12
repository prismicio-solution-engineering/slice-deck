"use client";

import { AuthorDocumentData } from "@/prismicio-types";
import { asLink } from "@prismicio/client";
import Script from "next/script";

export const Calendar = ({ author }: { author: AuthorDocumentData }) => {
  return (
    <>
      <div
        className="meetings-iframe-container"
        data-src={`${asLink(author.calendar_link)}?embed=true`}
      />
      <Script
        type="text/javascript"
        src="https://static.hsappstatic.net/MeetingsEmbed/ex/MeetingsEmbedCode.js"
      />
    </>
  );
};
