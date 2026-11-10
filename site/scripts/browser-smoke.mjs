import assert from "node:assert/strict";
import { mkdir, writeFile } from "node:fs/promises";
import { createRequire } from "node:module";
import { tmpdir } from "node:os";
import { join, resolve } from "node:path";
import { articleRoute, LOCALES, STATIC_ROUTES } from "../src/i18n/config.ts";
import {
  AMAZON_AFFILIATE_TAG,
  HALO_PRO_AMAZON_SHORTLINK,
} from "../src/lib/amazon-affiliate.mjs";

// Run against the integrated Compose service. The browser never follows merchant
// links or requests a third-party origin. No account or production access is needed.
const baseUrl = new URL(process.env.FOURANU_BROWSER_BASE_URL ?? "http://127.0.0.1:4321");
assert(["127.0.0.1", "localhost", "[::1]"].includes(baseUrl.hostname), "Use a loopback preview origin");
assert.equal(baseUrl.protocol, "http:", "Use the local HTTP preview");
const outputDirectory = resolve(process.env.FOURANU_BROWSER_OUTPUT ?? join(tmpdir(), "fouranu-browser-results"));
await mkdir(outputDirectory, { recursive: true });

const report = {
  startedAt: new Date().toISOString(),
  baseUrl: baseUrl.origin,
  browser: "chromium",
  scenarios: [],
  failures: [],
};
const viewports = [
  { width: 320, height: 800 },
  { width: 360, height: 800 },
  { width: 1280, height: 900 },
];
const routes = LOCALES.flatMap((locale) => [
  { locale, key: "home", path: STATIC_ROUTES.home[locale] },
  { locale, key: "accessories", path: STATIC_ROUTES.accessories[locale] },
  { locale, key: "ovens", path: STATIC_ROUTES.ovens[locale] },
  { locale, key: "FOUR-009", path: articleRoute("FOUR-009", locale), article: true },
  { locale, key: "FOUR-010", path: articleRoute("FOUR-010", locale), article: true },
]);

async function evaluateWithDeadline(page, callback, label) {
  let timer;
  try {
    return await Promise.race([
      page.evaluate(callback),
      new Promise((_, reject) => {
        timer = setTimeout(() => reject(new Error(`${label} did not finish within 20 seconds`)), 20_000);
      }),
    ]);
  } finally {
    clearTimeout(timer);
  }
}

async function checkFocus(page) {
  const focus = await page.evaluate(() => {
    const element = document.activeElement;
    if (!(element instanceof HTMLElement) || element === document.body) return null;
    const style = getComputedStyle(element);
    const bounds = element.getBoundingClientRect();
    return {
      tag: element.tagName,
      text: (element.textContent ?? element.getAttribute("aria-label") ?? "").trim().slice(0, 120),
      visible: bounds.width > 0 && bounds.height > 0 && style.visibility !== "hidden"
        && bounds.bottom > 0 && bounds.top < innerHeight && bounds.right > 0 && bounds.left < innerWidth,
      focusVisible: element.matches(":focus-visible"),
      indicator: (style.outlineStyle !== "none" && parseFloat(style.outlineWidth) >= 1)
        || style.boxShadow !== "none",
    };
  });
  assert(focus?.visible, "Keyboard focus must be on a visible control");
  assert(focus.focusVisible && focus.indicator, `Visible focus indicator missing: ${focus.text}`);
  return focus;
}

async function loadImagesAndCheckLayout(page) {
  // Scroll through actual content so native lazy loading is exercised before the
  // screenshot and image checks. Nested tables may scroll; the document may not.
  await evaluateWithDeadline(page, async () => {
    const step = Math.max(200, innerHeight - 100);
    for (let top = 0; top < document.documentElement.scrollHeight; top += step) {
      scrollTo({ top, behavior: "instant" });
      await new Promise((done) => requestAnimationFrame(() => requestAnimationFrame(done)));
    }
    await Promise.all([...document.images].filter((img) => img.getClientRects().length > 0)
      .map((img) => img.decode().catch(() => {})));
    scrollTo({ top: 0, behavior: "instant" });
  }, "Lazy image loading");
  const layout = await page.evaluate(() => ({
    width: innerWidth,
    scrollWidth: Math.max(document.documentElement.scrollWidth, document.body.scrollWidth),
    brokenImages: [...document.images]
      .filter((img) => img.getClientRects().length > 0 && (!img.complete || img.naturalWidth === 0))
      .map((img) => img.currentSrc || img.src),
    imageCount: [...document.images].filter((img) => img.getClientRects().length > 0).length,
  }));
  assert(layout.scrollWidth <= layout.width + 1,
    `Document overflow: ${layout.scrollWidth}px exceeds ${layout.width}px`);
  assert.deepEqual(layout.brokenImages, [], "Rendered images must load");
  return layout;
}

async function checkAffiliateLinks(page, article) {
  const result = await page.evaluate(() => ({
    purchase: [...document.querySelectorAll(".purchase-cta a[href]")].map((link) => ({
      href: link.href,
      rel: link.rel.split(/\s+/),
      affiliate: link.dataset.affiliate,
      objectId: link.dataset.commercialObject,
      label: link.textContent.trim(),
      disclosure: link.closest(".purchase-cta")?.querySelector(".purchase-cta__disclosure")?.textContent.trim(),
    })),
    amazon: [...document.querySelectorAll("a[href]")]
      .filter((link) => /(^|\.)amazon\.fr$/.test(new URL(link.href).hostname)
        || new URL(link.href).hostname === "amzn.to")
      .map((link) => ({ href: link.href, rel: link.rel.split(/\s+/) })),
  }));
  if (article) assert(result.purchase.length > 0, "New buying guides must have affiliate purchase links");
  for (const link of result.purchase) {
    const host = new URL(link.href).hostname;
    assert(/(^|\.)amazon\.fr$/.test(host) || host === "amzn.to", `Unexpected purchase destination: ${link.href}`);
    assert(link.rel.includes("sponsored"), `Purchase CTA lacks sponsored relation: ${link.href}`);
    assert.equal(link.affiliate, "amazon", `Non-affiliate purchase CTA: ${link.href}`);
    assert(link.objectId && link.label && link.disclosure, "CTA needs its product, accessible label and disclosure");
  }
  for (const link of result.amazon) {
    const url = new URL(link.href);
    assert(link.rel.includes("sponsored"), `Amazon link lacks sponsored relation: ${link.href}`);
    if (url.hostname === "amzn.to") {
      assert.equal(link.href, HALO_PRO_AMAZON_SHORTLINK, "Only the verified short link is allowed");
    } else {
      assert(/^\/dp\/[A-Z0-9]{10}\/?$/.test(url.pathname), `Exact Amazon product link required: ${link.href}`);
      assert.equal(url.searchParams.get("tag"), AMAZON_AFFILIATE_TAG, "Affiliate tag must be retained");
    }
  }
  return { purchaseCount: result.purchase.length, amazonCount: result.amazon.length };
}

async function checkSourcesWithKeyboard(page) {
  const outer = page.locator(".cited-sources__disclosure");
  assert.equal(await outer.count(), 1, "Article sources must remain available");
  await outer.locator(":scope > summary").focus();
  await page.keyboard.press("Enter");
  assert(await outer.evaluate((element) => element.open), "Sources must expand with Enter");
  const source = outer.locator(".cited-source")
    .filter({ has: page.locator("a.cited-source__link:not([data-affiliate])") }).first();
  assert.equal(await source.count(), 1, "A direct documentary source must remain present");
  await source.locator(":scope > summary").focus();
  await page.keyboard.press("Enter");
  assert(await source.evaluate((element) => element.open), "Individual source must expand with Enter");
  const link = source.locator("a.cited-source__link:not([data-affiliate])").first();
  assert(await link.isVisible(), "Expanded source link must be visible");
  const href = await link.getAttribute("href");
  const url = new URL(href);
  assert.equal(url.protocol, "https:", "Documentary source must use HTTPS");
  assert(!/(^|\.)amazon\.fr$/.test(url.hostname) && url.hostname !== "amzn.to", "Expected a direct non-Amazon source");
  assert(!url.searchParams.has("tag"), "Direct documentary sources must not receive an affiliate tag");
  assert(!(await link.getAttribute("rel") ?? "").split(/\s+/).includes("sponsored"),
    "Unpaid documentary sources must not be labelled sponsored");
  await page.keyboard.press("Tab");
  const focused = await checkFocus(page);
  await outer.locator(":scope > summary").focus();
  await page.keyboard.press("Enter");
  return { href, keyboardFocus: focused.tag };
}

let browser;
try {
  const packagePath = process.env.FOURANU_PLAYWRIGHT_PACKAGE;
  const requirePlaywright = createRequire(packagePath ? resolve(packagePath) : new URL("../package.json", import.meta.url));
  const { chromium } = requirePlaywright("playwright");
  browser = await chromium.launch({ headless: true });
  for (const viewport of viewports) {
    for (const route of routes) {
      const name = `${route.locale}-${route.key}-${viewport.width}`;
      const scenario = { name, path: route.path, viewport, passed: false };
      const faults = [];
      const context = await browser.newContext({ viewport, reducedMotion: "reduce", colorScheme: "light" });
      const page = await context.newPage();
      page.setDefaultTimeout(10_000);
      page.on("pageerror", (error) => faults.push(`Page error: ${error.message}`));
      page.on("console", (message) => {
        if (["error", "warning"].includes(message.type())) faults.push(`Console ${message.type()}: ${message.text()}`);
      });
      page.on("response", (response) => {
        if (response.status() >= 400) faults.push(`HTTP ${response.status()}: ${response.url()}`);
      });
      page.on("requestfailed", (request) => faults.push(`Request failed: ${request.url()} (${request.failure()?.errorText})`));
      await context.route("**/*", async (request) => {
        if (new URL(request.request().url()).origin !== baseUrl.origin) {
          faults.push(`Unexpected third-party request: ${request.request().url()}`);
          await request.abort();
        } else {
          await request.continue();
        }
      });
      try {
        const response = await page.goto(new URL(route.path, baseUrl).href, { waitUntil: "networkidle" });
        assert.equal(response?.status(), 200, "Expected route to respond 200");
        assert.equal(await page.locator("html").getAttribute("lang"), route.locale);
        assert.equal(await page.locator("h1").count(), 1, "Exactly one page heading is required");
        await evaluateWithDeadline(page, () => document.fonts.ready.then(() => true), "Font loading");
        scenario.layout = await loadImagesAndCheckLayout(page);
        scenario.focus = [];
        for (let index = 0; index < 8; index += 1) {
          await page.keyboard.press("Tab");
          scenario.focus.push(await checkFocus(page));
        }
        const motion = await page.evaluate(() => ({
          enabled: matchMedia("(prefers-reduced-motion: reduce)").matches,
          scrollBehavior: getComputedStyle(document.documentElement).scrollBehavior,
          navigationTransitions: [...document.querySelectorAll(".site-nav a")]
            .map((element) => getComputedStyle(element, "::after").transitionDuration),
          buttonTransitions: [...document.querySelectorAll(".button-link")]
            .map((element) => getComputedStyle(element).transitionDuration),
        }));
        assert(motion.enabled, "Reduced motion must be active in the browser");
        assert.equal(motion.scrollBehavior, "auto", "Reduced motion must disable smooth scrolling");
        for (const value of [...motion.navigationTransitions, ...motion.buttonTransitions]) {
          assert(value.split(",").every((duration) => parseFloat(duration) === 0), "Reduced motion must disable control transitions");
        }
        scenario.reducedMotion = motion;
        scenario.links = await checkAffiliateLinks(page, route.article);
        if (route.article) scenario.sources = await checkSourcesWithKeyboard(page);
        assert.deepEqual(faults, [], "No console, HTTP or network errors are allowed");
        await page.evaluate(() => { document.activeElement?.blur(); scrollTo({ top: 0, behavior: "instant" }); });
        await page.screenshot({ path: join(outputDirectory, `${name}.png`), fullPage: route.key === "home" });
        scenario.passed = true;
      } catch (error) {
        scenario.error = error.stack ?? String(error);
        scenario.faults = faults;
        report.failures.push(`${name}: ${error.message}`);
        await page.screenshot({ path: join(outputDirectory, `${name}-failed.png`), fullPage: true }).catch(() => {});
      } finally {
        report.scenarios.push(scenario);
        console.log(`${scenario.passed ? "PASS" : "FAIL"} ${name} ${route.path}`);
        await context.close();
      }
    }
  }
} catch (error) {
  report.failures.push(error.stack ?? String(error));
} finally {
  await browser?.close();
  report.finishedAt = new Date().toISOString();
  await writeFile(join(outputDirectory, "report.json"), `${JSON.stringify(report, null, 2)}\n`);
}

if (report.failures.length > 0) {
  console.error(report.failures.join("\n"));
  process.exitCode = 1;
} else {
  console.log(`Browser smoke passed: ${report.scenarios.length} scenarios. Evidence: ${outputDirectory}`);
}
