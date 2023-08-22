// @ts-check
import { expect, test } from '@playwright/test';

test.beforeEach(async ({ page }) => {
  await page.goto('/');
});

test.describe('should display the heading', () => {
  test('should display correct heading', async ({ page }) => {
    await page
      .getByRole('link', { name: 'Image of Learning path Learning path See navigation for complete learning path.' })
      .click();
    await page.getByRole('link', { name: '/one' }).click();
    await expect.soft(page.getByRole('heading', { name: 'React Fun Facts' })).toBeVisible();
  });
});
