import { defineConfig } from "astro/config";
import { unified } from "@astrojs/markdown-remark";
import { copyFile } from "node:fs/promises";
import rehypeAccessibleTables from "./plugins/rehype-accessible-tables.mjs";
import rehypeAmazonAffiliateLinks from "./plugins/rehype-amazon-affiliate-links.mjs";

const localizedNotFoundPages = {
  name: "fouranu-localized-not-found-pages",
  hooks: {
    "astro:build:done": async ({ dir }) => {
      await Promise.all(["en", "de"].map((locale) =>
        copyFile(
          new URL(`./${locale}/404/index.html`, dir),
          new URL(`./${locale}/404.html`, dir),
        )
      ));
    },
  },
};

export default defineConfig({
  site: "https://fouranu.com",
  output: "static",
  trailingSlash: "always",
  i18n: {
    defaultLocale: "fr",
    locales: ["fr", "en", "de"],
    routing: {
      prefixDefaultLocale: false,
      redirectToDefaultLocale: false,
    },
  },
  build: {
    format: "directory",
  },
  integrations: [localizedNotFoundPages],
  markdown: {
    processor: unified({
      rehypePlugins: [rehypeAccessibleTables, rehypeAmazonAffiliateLinks],
    }),
  },
  server: {
    host: "0.0.0.0",
    port: 4321,
  },
});
