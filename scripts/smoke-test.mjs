import { chromium } from "playwright";

const baseUrl = process.env.SMOKE_BASE_URL || "http://127.0.0.1:4321";

const routes = [
  {
    path: "/",
    selectors: ["#btn-open-chat", "#chat-modal", "#api-key-modal", "#manual-modal"],
  },
  {
    path: "/explorer/",
    selectors: [
      "#view-explorer",
      "#category-buttons",
      "#search-input",
      "#execute-query-button",
      "#results-container",
    ],
  },
  {
    path: "/titans/",
    selectors: ["#view-titans", "#titans-buttons", "#titans-container"],
  },
  {
    path: "/mcp/",
    selectors: ["#view-mcp", "#mcp-buttons", "#mcp-search-input", "#mcp-container"],
  },
  {
    path: "/docs/",
    selectors: ["#view-docs", "#docs-buttons", "#docs-container"],
  },
  {
    path: "/code-review/",
    selectors: [
      "#view-code-review",
      "#code-review-url",
      "#code-review-run",
      "#code-review-tabs",
      "#code-review-output",
    ],
  },
];

function assert(condition, message) {
  if (!condition) {
    throw new Error(message);
  }
}

async function run() {
  const browser = await chromium.launch({ headless: true });
  const context = await browser.newContext();
  const page = await context.newPage();

  const pageErrors = [];
  page.on("pageerror", (err) => {
    pageErrors.push(err.message || String(err));
  });

  for (const route of routes) {
    const url = `${baseUrl}${route.path}`;
    const response = await page.goto(url, { waitUntil: "domcontentloaded", timeout: 30000 });
    assert(response && response.ok(), `Route not reachable: ${url}`);

    for (const selector of route.selectors) {
      const count = await page.locator(selector).count();
      assert(count > 0, `Missing selector "${selector}" on ${route.path}`);
    }
  }

  await page.goto(`${baseUrl}/explorer/`, { waitUntil: "domcontentloaded" });
  await page.click("#btn-open-chat");
  await page.waitForFunction(
    () => !document.getElementById("chat-modal")?.classList.contains("hidden"),
    { timeout: 5000 }
  );
  await page.click("#btn-close-chat");
  await page.waitForFunction(
    () => document.getElementById("chat-modal")?.classList.contains("hidden"),
    { timeout: 5000 }
  );

  await page.click("#btn-open-manual");
  await page.waitForFunction(
    () => !document.getElementById("manual-modal")?.classList.contains("hidden"),
    { timeout: 5000 }
  );
  await page.click("#btn-close-manual");
  await page.waitForFunction(
    () => document.getElementById("manual-modal")?.classList.contains("hidden"),
    { timeout: 5000 }
  );

  await page.click("#lang-it");
  await page.waitForTimeout(200);
  const statusText = (await page.locator("[data-i18n='system_status']").first().innerText()).trim();
  assert(
    statusText.includes("STATO_SISTEMA") || statusText.includes("SYSTEM"),
    "Language switch did not preserve system status text"
  );

  await page.goto(`${baseUrl}/code-review/`, { waitUntil: "domcontentloaded" });
  const tabCount = await page.locator("#code-review-tabs .cr-tab").count();
  assert(tabCount >= 4, "Expected at least 4 code review tabs");

  await browser.close();

  assert(pageErrors.length === 0, `Runtime JS errors:\n${pageErrors.join("\n")}`);
  console.log("Smoke test passed.");
}

run().catch((err) => {
  console.error(err.stack || err.message || String(err));
  process.exit(1);
});
