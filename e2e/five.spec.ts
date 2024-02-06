/* eslint-disable sonarjs/no-duplicate-string */
import { expect, test } from '@playwright/test';

test('Five form should work correctly', async ({ page }) => {
  await page.goto('/');
  // Navigate to five from the main navigation
  await page
    .getByRole('link', { name: 'Image of Learning path Learning path See navigation for complete learning path.' })
    .click();
  await page.getByRole('link', { name: '/five' }).click();

  // Fill out the form
  await page.getByPlaceholder('First Name').click();
  await page.getByPlaceholder('First Name').fill('My Playwright');
  await page.getByPlaceholder('First Name').press('Tab');
  await page.getByPlaceholder('Last Name').fill('Bot');
  await page.getByPlaceholder('Last Name').press('Tab');
  await page.getByPlaceholder('Email').fill('my.playwright@bot.com');
  await page.getByPlaceholder('Email').press('Tab');
  await page.getByPlaceholder('Comments').fill('no comment to this');
  // Check all the boxes
  await page.locator('form div').filter({ hasText: 'Are you friendly?' }).click();
  await page.getByLabel('Part-time').check();
  await page.locator('#favColor').selectOption('indigo');

  // Send it
  await page.getByRole('button', { name: 'Send' }).click();

  // Check result
  expect(await page.getByText('{"comments":"').allInnerTexts()).toContain(
    '{"comments":"no comment to this","email":"my.playwright@bot.com","employment":"part-time","favColor":"indigo","firstName":"My Playwright","isFriendly":true,"lastName":"Bot"}',
  );
});
