import { AuthorDocument, ResourcesSlice } from "@/prismicio-types";
import { Content, asLink, isFilled } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import { Context } from "../IntroSlide";
import { Container } from "@/components/Slides/Container";
import { SlideFullWidth } from "@/components/Slides/SlideFullWidth";
import { GlobalPrismicRichText } from "@/components/GlobalPrismicRichText";
import { SlideTwoCols } from "@/components/Slides/SlideTwoCols";
import { LeftCol, RightCol } from "@/components/Slides/Columns";
import { createClient } from "@/prismicio";
import { PrismicNextImage } from "@prismicio/next";
import { EnvelopeIcon, PhoneIcon } from "@heroicons/react/24/solid";
import { Calendar } from "@/components/Calendar";
import Image from "next/image";
import LinkedInIcon from "@/assets/icons/linkedin"
/**
 * Props for `Resources`.
 */
export type ResourcesProps = SliceComponentProps<Content.ResourcesSlice>;

/**
 * Component for "Resources" Slices.
 */
const Resources = async ({
  slice,
  context,
}: {
  slice: ResourcesSlice;
  context: Context;
}) => {
  const client = createClient();
  const author = await client.getByUID<AuthorDocument>(
    "author",
    context.page.author.uid
  );

  return (
    <Container page={context.page} settings={context.settings}>
      {slice.variation === "default" ? (
        <SlideFullWidth className="flex flex-col justify-center">
          <GlobalPrismicRichText field={slice.primary.title} />
          <GlobalPrismicRichText field={slice.primary.content} />
        </SlideFullWidth>
      ) : (
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
            </div>
          </LeftCol>
          <RightCol>
            <Calendar author={author.data} />
          </RightCol>
        </SlideTwoCols>
      )}
    </Container>
  );
};

export default Resources;
