import { expect, test } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('/');

  // Navigate to seven from main navigation
  await page
    .getByRole('link', { name: 'Image of Learning path Learning path See navigation for complete learning path.' })
    .click();
  await page.getByRole('link', { name: '/seven' }).click();

  // Get loaded text
  expect(await page.getByText('{"name":"').innerText()).toContain('{"name":"Luke Skywalker"');
});
