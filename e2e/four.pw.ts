import { test } from '@playwright/test';

test.describe('Four - Meme Generator', () => {
  test('should generate a meme saying "hello playwright" and take a screenshot', async ({ page }) => {
    await page.goto('/four');
    await page.getByPlaceholder('Insert text for top part').click();
    await page.getByPlaceholder('Insert text for top part').fill('hello');
    await page.getByPlaceholder('Insert text for lower part').click();
    await page.getByPlaceholder('Insert text for lower part').fill('playwright');
    await page.getByRole('button', { name: 'Get new meme' }).click();
    await page.screenshot({ path: './e2e/img/four/meme.png' });
  });
});
