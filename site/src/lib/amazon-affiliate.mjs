export const AMAZON_AFFILIATE_TAG = "fouranu-21";
export const HALO_PRO_AMAZON_SHORTLINK = "https://amzn.to/4y8lFcC";

const AMAZON_FR_HOST_PATTERN = /(^|\.)amazon\.fr$/i;

export function isAmazonLink(value) {
  try {
    const url = new URL(value);
    return AMAZON_FR_HOST_PATTERN.test(url.hostname) || url.hostname === "amzn.to";
  } catch {
    return false;
  }
}

export function toAmazonAffiliateUrl(value) {
  const url = new URL(value);

  if (AMAZON_FR_HOST_PATTERN.test(url.hostname)) {
    url.searchParams.set("tag", AMAZON_AFFILIATE_TAG);
    return url.toString();
  }

  if (url.hostname === "amzn.to") {
    if (url.toString() !== HALO_PRO_AMAZON_SHORTLINK) {
      throw new Error(`Lien court Amazon non vérifié : ${url.toString()}`);
    }
    return HALO_PRO_AMAZON_SHORTLINK;
  }

  return url.toString();
}

export function affiliateRel(value) {
  return isAmazonLink(value)
    ? "sponsored external noopener"
    : "external noopener";
}
