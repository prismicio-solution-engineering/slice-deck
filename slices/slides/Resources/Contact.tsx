"use client";

import { GlobalPrismicRichText } from "@/components/GlobalPrismicRichText";
import { ResourcesSliceContact } from "@/prismicio-types";
import { Context } from "@/utils/GlobalTypes";
import { PrismicNextImage } from "@prismicio/next";
import { SlideTwoCols } from "@/components/Slides/SlideTwoCols";
import { LeftCol, RightCol } from "@/components/Slides/Columns";
import { createClient } from "@/prismicio";
import { EnvelopeIcon, PhoneIcon } from "@heroicons/react/24/solid";
import { Calendar } from "@/components/Calendar";
import LinkedInIcon from "@/assets/icons/linkedin";
import { AuthorDocument } from "@/prismicio-types";
import { asLink, isFilled } from "@prismicio/client";
import { CalendarDaysIcon } from "@heroicons/react/24/outline";
import Script from "next/script";

export const Contact = async ({
  slice,
  context,
}: {
  slice: ResourcesSliceContact;
  context: Context;
}) => {
  const client = createClient();

  const authorUid: string | undefined = (() => {
    if (isFilled.contentRelationship(context.page.author)) {
      return context.page.author.uid;
    } else return undefined;
  })();

  if (authorUid === undefined) {
    throw new Error("Author UID is undefined");
  }

  const author = await client.getByUID<AuthorDocument>("author", authorUid);
  return (
    <SlideTwoCols larger="right">
      <LeftCol>
        <GlobalPrismicRichText field={slice.primary.title} />

        <PrismicNextImage
          field={author.data.profile_picture}
          width={100}
          height={100}
          className="rounded-full mb-4"
        />

        <p className="font-headings text-xl text-gray-base break-words font-normal">
          {author.data.name}
        </p>
        <p className="font-copy text-lg uppercase text-gray-base break-words font-normal mb-4">
          {author.data.role}
        </p>
        <div className="w-full flex flex-row gap-4">
          {isFilled.keyText(author.data.email) && (
            <a href={`mailto:${author.data.email}`}>
              <EnvelopeIcon width={32} />
            </a>
          )}

          {isFilled.link(author.data.linkedin) && (
            <a href={`${asLink(author.data.linkedin)}`}>
              <LinkedInIcon />
            </a>
          )}

          {isFilled.keyText(author.data.phone_number) && (
            <a href={`tel:${author.data.phone_number}`}>
              <PhoneIcon width={32} />
            </a>
          )}

          {isFilled.link(author.data.calendar_link) && (
            <a href={`${asLink(author.data.calendar_link)}`} target="_blank">
              <CalendarDaysIcon width={32} />
            </a>
          )}
        </div>
      </LeftCol>
      <RightCol>
        {author.data.calendar_link && (
          <>
            <div
              className="meetings-iframe-container"
              data-src={`${asLink(author.data.calendar_link)}?embed=true`}
            />
            <Script
              type="text/javascript"
              src="https://static.hsappstatic.net/MeetingsEmbed/ex/MeetingsEmbedCode.js"
            />
          </>
        )}
      </RightCol>
    </SlideTwoCols>
  );
};
