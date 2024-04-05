// import { test, expect } from "@playwright/test";

// test("has title", async ({ page }) => {
// 	await page.goto("https://playwright.dev/");

// 	// Expect a title "to contain" a substring.
// 	await expect(page).toHaveTitle(/Playwright/);
// });

// test("get started link", async ({ page }) => {
// 	await page.goto("https://playwright.dev/");

// 	// Click the get started link.
// 	await page.getByRole("link", { name: "Get started" }).click();

// 	// Expects page to have a heading with the name of Installation.
// 	await expect(
// 		page.getByRole("heading", { name: "Installation" })
// 	).toBeVisible();
// });

import { test, expect } from "@playwright/test";

test("test", async ({ page }) => {
  await page.goto("https://playwright.dev/");
  await page.getByRole("button", { name: "Node.j" }).click();
  await page
    .getByLabel("Main", { exact: true })
    .getByRole("link", { name: "Python" })
    .click();
  await page.getByRole("link", { name: "JavaScript" }).click();
  await page.getByRole("tab", { name: "pnpm" }).click();
});
