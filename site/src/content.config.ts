import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "astro/zod";

const articleImage = z.object({
  src: z.string().regex(/^\/images\/articles\/[a-z0-9-]+-1600\.webp$/),
  alt: z.string().min(20),
  caption: z.string().min(20),
  assetId: z.string().regex(/^AS-\d{4}$/),
});

const analyses = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/analyses" }),
  schema: z.object({
    articleId: z.string().regex(/^(OONI|GOZNEY)-\d{3}$/),
    brand: z.enum(["ooni", "gozney"]),
    title: z.string(),
    description: z.string(),
    summary: z.string(),
    status: z.enum(["draft", "review", "publishable"]),
    type: z.enum(["guide", "decision", "model"]),
    author: z.enum(["nicolas", "florian", "magali"]),
    model: z.string().optional(),
    publishedAt: z.coerce.date(),
    updatedAt: z.coerce.date(),
    indexable: z.boolean().default(false),
    image: articleImage,
    evidenceIds: z.array(z.string().regex(/^EV-\d{4}$/)).min(1),
    evidenceTypes: z.array(z.enum(["FAB", "T-MES", "T-OBS", "FAN-SYN", "FAN-INF"])),
    limitations: z.array(z.string()),
  }),
});

export const collections = { analyses };
