import { NextRequest } from "next/server";
import { redirectToPreviewURL } from "@prismicio/next";

import { createClient } from "../../../prismicio";
import { FilledContentRelationshipField } from "@prismicio/client";
import * as crypto from 'crypto';

export async function GET(request: NextRequest) {
  const client = createClient();

  return await redirectToPreviewURL({ client, request, linkResolver });
}

function linkResolver(doc:FilledContentRelationshipField) {
  if (doc.type === 'deck') {
    return `/pdf/${crypto.createHash('sha256').update(doc.uid!).digest('hex')}`
  }
  return null
}