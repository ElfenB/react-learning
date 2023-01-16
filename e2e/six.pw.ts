import { expect, test } from '@playwright/test';

test('Six form should work correctly', async ({ page }) => {
  await page.goto('/');
  // Navigate to six from the main navigation
  await page
    .getByRole('link', { name: 'Image of Learning path Learning path See navigation for complete learning path.' })
    .click();
  await page.getByRole('link', { name: '/six' }).click();

  // Fill out the form
  await page.getByPlaceholder('Email').fill('playwright@bot.com');
  await page.getByPlaceholder('Email').press('Tab');
  await page.locator('input[name="password"]').fill('test123');
  await page.locator('input[name="password"]').press('Tab');
  await page.getByPlaceholder('Repeat password').fill('test123');

  // Check all the boxes
  await page.getByLabel('I want to join the newsletter').uncheck();

  // Send it
  await page.getByRole('button', { name: 'Login' }).click();

  // Check result
  expect(
    await page.getByText('{"email":"').allInnerTexts()
  ).toContain('{"email":"playwright@bot.com","newsletter":false,"password":"test123","passwordRepeat":"test123"}');
});
