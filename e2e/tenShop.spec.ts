// @ts-check
import { expect, Page, test } from '@playwright/test';

test.beforeEach(async ({ page }) => {
  await page.goto('/ten');
});

test.describe('adding something to the cart', () => {
  test('should have an empty cart in the beginning', async ({ page }) => {
    expect(await getBalanceFromCart(page)).toContain('0.00€');
  });

  test('should be able to add an item to the cart', async ({ page }) => {
    await page.getByRole('button', { name: 'Get 1 for 10.50€' }).click();
    expect(await getBalanceFromCart(page)).toContain('10.50€');
  });
});

async function navigateToCart(page: Page) {
  await page.getByAltText('shopping cart icon').click();
}

async function getBalanceFromCart(page: Page) {
  await navigateToCart(page);
  const text = await page.getByText('Total:').allTextContents();
  return text[0];
}
