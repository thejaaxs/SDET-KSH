// The playwright uses the number of workers based on the system core configs !
// You can change it 

import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Playwright/);
});

// Only the single test will be executed !
// test.only - executes only this test !
// test.skip - skips the test !

test.skip('get started link', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  // Click the get started link.
  await page.getByRole('link', { name: 'Get started' }).click();

  // Expects page to have a heading with the name of Installation.
  await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();
});

test("has title name", async ({ page }) => {
  await page.goto('https://playwright.dev/')
  let titleName = await page.locator('.highlight_gXVj').textContent();
  console.log(titleName)
})

// Exploring the Playwright UI - Show Browser !
// In Ui Made, the Browser will allow you to navigate in the testing side 
// npx playwright test --ui for debugging deeper