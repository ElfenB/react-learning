// @ts-check
import { expect, test } from '@playwright/test';

test.beforeEach(async ({ page }) => {
  await page.goto('/');
});

test.describe('test landing page', () => {
  test('should display correct title', async ({ page }) => {
    await expect(page).toHaveTitle('Ben learns React');
  });

  test('should display correct heading', async ({ page }) => {
    await expect.soft(page.getByRole('heading', { name: 'Navigation' })).toBeVisible();
  });
});
