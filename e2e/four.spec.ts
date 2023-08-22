import { test } from '@playwright/test';

test.describe('Four - Meme Generator', () => {
  test('should generate a meme saying "hello playwright" and take a screenshot', async ({ page }) => {
    // Navigate to four
    await page.goto('/four');

    // Fill out the form
    await page.getByPlaceholder('Insert text for top part').click();
    await page.getByPlaceholder('Insert text for top part').fill('hello');
    await page.getByPlaceholder('Insert text for lower part').click();
    await page.getByPlaceholder('Insert text for lower part').fill('playwright');

    // Get new image
    await page.getByRole('button', { name: 'Get new meme' }).click();
    // Wait for it to render
    await page.waitForLoadState('domcontentloaded');

    // Take screenshot
    await page.screenshot({ path: './e2e/img/four/meme.png' });
  });
});
