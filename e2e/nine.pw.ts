import { expect, test } from '@playwright/test';

test('Test Nine', async ({ page }) => {
  await page.goto('/nine');

  // Start with 0
  await expect(page.getByText('0')).toBeVisible();

  // Increase to 1
  await page.getByRole('button', { name: '+' }).click();
  await expect(page.getByText('1')).toBeVisible();

  // Decrease to 0
  await page.getByRole('button', { name: '-' }).click();
  await expect(page.getByText('0')).toBeVisible();

  // Decrease to -1
  await page.getByRole('button', { name: '-' }).click();
  await expect(page.getByText('-1')).toBeVisible();

  // Increase by 10
  await page.locator('#amount').click();
  await page.locator('#amount').fill('10');
  await page.getByRole('button', { name: 'Increment by amount' }).click();
  await expect(page.getByText('9')).toBeVisible();
});
