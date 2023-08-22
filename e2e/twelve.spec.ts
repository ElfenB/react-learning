import { expect, test } from '@playwright/test';

test('Test Twelve Timetable', async ({ page }) => {
  await page.goto('/twelve');
  await expect(page.getByRole('heading', { name: 'Stundenplan' })).toBeVisible();
  await expect(page.getByRole('heading', { name: 'Kurse' })).toBeVisible();

  await page.getByPlaceholder('dd.mm.yyyy').click();
  await page.getByPlaceholder('dd.mm.yyyy').fill('16.01.2022');

  await page.waitForLoadState('domcontentloaded');

  await expect(page.getByText('Montag')).toBeVisible();
});
