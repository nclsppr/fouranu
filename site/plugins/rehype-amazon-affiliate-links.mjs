import {
  affiliateRel,
  isAmazonLink,
  toAmazonAffiliateUrl,
} from "../src/lib/amazon-affiliate.mjs";

function visit(node) {
  if (!node || !Array.isArray(node.children)) return;

  for (const child of node.children) {
    if (child?.type === "element" && child.tagName === "a") {
      const href = child.properties?.href;
      if (typeof href === "string" && isAmazonLink(href)) {
        child.properties.href = toAmazonAffiliateUrl(href);
        child.properties.rel = affiliateRel(href).split(" ");
        child.properties.dataAffiliate = "amazon";
      }
    }
    visit(child);
  }
}

export default function rehypeAmazonAffiliateLinks() {
  return (tree) => visit(tree);
}
