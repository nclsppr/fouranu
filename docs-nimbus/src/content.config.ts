import { defineCollection } from "astro:content";
// `z` re-exported from `astro:content` is deprecated; import it from
// `astro/zod` (the pattern nimbus-docs' own schema helpers document).
import { z } from "astro/zod";
import { docsCollection, partialsCollection } from "@cloudflare/nimbus-docs/content";

export const collections = {
  docs: defineCollection(
    docsCollection({
      schemaFields: {
        // Pages may declare `audience: human` when they target readers rather
        // than serving as a neutral project reference.
        audience: z.literal("human").optional(),
        sourcePath: z.string(),
        visibility: z.enum(["public", "internal", "reference", "archive"]),
      },
    }),
  ),
  partials: defineCollection(partialsCollection()),
};
