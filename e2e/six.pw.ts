import { expect, test } from '@playwright/test';

test('Five form should work correctly', async ({ page }) => {
  await page.goto('http://localhost:5173/');
  await page
    .getByRole('link', { name: 'Image of Learning path Learning path See navigation for complete learning path.' })
    .click();
  await page.getByRole('link', { name: '/six' }).click();
  await page.getByPlaceholder('Email').fill('playwright@bot.com');
  await page.getByPlaceholder('Email').press('Tab');
  await page.locator('input[name="password"]').fill('test123');
  await page.locator('input[name="password"]').press('Tab');
  await page.getByPlaceholder('Repeat password').fill('test123');
  await page.getByLabel('I want to join the newsletter').uncheck();
  expect(
    await page.getByText('{"email":"').allInnerTexts()
  ).toContain('{"email":"playwright@bot.com","newsletter":false,"password":"test123","passwordRepeat":"test123"}');
  await page.getByRole('button', { name: 'Login' }).click();
});
