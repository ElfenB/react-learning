// @ts-check
import { expect, test } from '@playwright/test';

test('should display correct title', async ({ page }) => {
  await page.goto('/');

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

  test('should display the right heading', async ({ page }) => {
    await page.goto('/');
    await page
      .getByRole('link', { name: 'Image of Learning path Learning path See navigation for complete learning path.' })
      .click();
    await page.getByRole('link', { name: '/one' }).click();
    await expect.soft(page.getByRole('heading', { name: 'React Fun Facts' })).toBeVisible();
  });
});
