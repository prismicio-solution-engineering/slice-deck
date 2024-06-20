"use client";

import { AuthorDocument } from "@/prismicio-types";
import { asLink } from "@prismicio/client";

export const Calendar = ({ author }: { author: AuthorDocument }) => {
  return (
    <>
      {/* Start of Meetings Embed Script */}
      <iframe
        title={"hubspot"}
        style={{
          width: "100%",
          height: "690px",
        }}
        src={`${asLink(author.data.calendar_link)}?embed=true`}
      />
      {/* End of Meetings Embed Script */}
    </>
  );
};
