// @ts-check
import { chromium, expect, test } from '@playwright/test';

// Setup that runs before every test below
test.beforeEach(async ({ page }) => {
  await chromium.launch({ headless: false, slowMo: 100 });
  await page.goto('/');
});

test('should display correct title', async ({ page }) => {
  await expect(page).toHaveTitle('Ben learns React');
  await expect.soft(page.getByRole('heading', { name: 'Navigation' })).toBeVisible();
});

test.describe('should display the heading', () => {
  test.use({
    viewport: {
      height: 1080,
      width: 1920,
    },
  });

  test('should display correct heading', async ({ page }) => {
    await page
      .getByRole('link', { name: 'Image of Learning path Learning path See navigation for complete learning path.' })
      .click();
    await page.getByRole('link', { name: '/one' }).click();
    await expect.soft(page.getByRole('heading', { name: 'React Fun Facts' })).toBeVisible();
  });
});

test('should have an empty cart', async ({ page }) => {
  await page.getByText('Redux Shop').click();
  await page.getByAltText('shopping cart icon').click();
  const text = await page.getByText('Total:').allTextContents();
  await expect(text[0]).toContain('0.00€');
});

// test('should be able to add an item to the cart', async ({ page }) => {
//   await page.goto()
// });
