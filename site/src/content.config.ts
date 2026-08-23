import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "astro/zod";

const analyses = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/analyses" }),
  schema: z.object({
    articleId: z.string().regex(/^OONI-\d{3}$/),
    title: z.string(),
    description: z.string(),
    summary: z.string(),
    status: z.enum(["researching", "inventory", "ready-noindex"]),
    type: z.enum(["guide", "decision", "model"]),
    model: z.string().optional(),
    updatedAt: z.coerce.date(),
    indexable: z.boolean().default(false),
    evidenceTypes: z.array(z.enum(["FAB", "T-MES", "T-OBS", "J-SYN", "J-INF"])),
    limitations: z.array(z.string()),
  }),
});

export const collections = { analyses };
