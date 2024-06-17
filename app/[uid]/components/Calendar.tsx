"use client";

import { AuthorDocument } from "@/prismicio-types";
import { asLink } from "@prismicio/client";

export const Calendar = ({ author }: { author: AuthorDocument }) => {
  return (
    <>
      {/* {asLink(author.data.calendar_link)} */}
      {/* Start of Meetings Embed Script */}
      {/* <div
        className="meetings-iframe-container"
        data-src={`${asLink(author.data.calendar_link)}?embed=true`}
      ></div>
      <script
        type="text/javascript"
        src="https://static.hsappstatic.net/MeetingsEmbed/ex/MeetingsEmbedCode.js"
      ></script> */}
      {/* End of Meetings Embed Script */}
      <iframe
        title={"hubspot"}
        style={{
          width: "100%",
          height: "690px",
        }}
        src={`${asLink(author.data.calendar_link)}?embed=true`}
      />
    </>
  );
};
