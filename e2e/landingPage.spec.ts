// @ts-check
import { expect, test } from '@playwright/test';

test('should display correct title', async ({ page }) => {
  await page.goto('/');

  await expect(page).toHaveTitle('Ben learns React');
});
