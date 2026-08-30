import { defineConfig } from "astro/config";
import { unified } from "@astrojs/markdown-remark";
import rehypeAccessibleTables from "./plugins/rehype-accessible-tables.mjs";
import rehypeAmazonAffiliateLinks from "./plugins/rehype-amazon-affiliate-links.mjs";

export default defineConfig({
  site: "https://fouranu.com",
  output: "static",
  trailingSlash: "always",
  build: {
    format: "directory",
  },
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
