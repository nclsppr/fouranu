import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "astro/zod";

const articleImage = z.object({
  src: z.string().regex(/^\/images\/articles\/[a-z0-9-]+-1600\.webp$/),
  alt: z.string().min(20),
  caption: z.string().min(20).max(90),
  assetId: z.string().regex(/^AS-\d{4}$/),
});

const analyses = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/analyses" }),
  schema: z.object({
    articleId: z.string().regex(/^(OONI|GOZNEY|ACC)-\d{3}$/),
    brand: z.enum(["ooni", "gozney", "accessoires"]),
    category: z.enum(["oven", "mixer", "accessoires"]),
    heroTreatment: z.enum(["official-stylized", "editorial-original"]),
    title: z.string(),
    seoTitle: z.string().max(65).optional(),
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
  }).superRefine((entry, context) => {
    if (entry.indexable && entry.status !== "publishable") {
      context.addIssue({
        code: "custom",
        message: "Un dossier indexable doit être publiable.",
        path: ["indexable"],
      });
    }
    const expectedPrefix = {
      ooni: "OONI",
      gozney: "GOZNEY",
      accessoires: "ACC",
    }[entry.brand];
    if (!entry.articleId.startsWith(`${expectedPrefix}-`)) {
      context.addIssue({
        code: "custom",
        message: "L’identifiant du dossier doit correspondre à sa famille éditoriale.",
        path: ["articleId"],
      });
    }
    const expectedCategory = entry.brand === "accessoires" ? "accessoires" : undefined;
    if (expectedCategory && entry.category !== expectedCategory) {
      context.addIssue({
        code: "custom",
        message: "Un dossier accessoires doit appartenir à la catégorie accessoires.",
        path: ["category"],
      });
    }
    const expectedHero = entry.brand === "accessoires"
      ? "editorial-original"
      : "official-stylized";
    if (entry.heroTreatment !== expectedHero) {
      context.addIssue({
        code: "custom",
        message: "Le traitement visuel doit correspondre au type de dossier.",
        path: ["heroTreatment"],
      });
    }
  }),
});

export const collections = { analyses };
