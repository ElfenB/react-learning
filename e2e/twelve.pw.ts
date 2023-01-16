import { expect, test } from '@playwright/test';

test('Test Twelve Timetable', async ({ page }) => {
  await page.goto('/twelve');
  await expect(page.getByRole('heading', { name: 'Stundenplan' })).toBeVisible();
  await expect(page.getByRole('heading', { name: 'Kurse' })).toBeVisible();
  await page.getByRole('button', { name: 'Choose date, selected date is 16. Jan. 2023' }).click();
  await page.getByRole('gridcell', { name: '23' }).click();

  await page.waitForLoadState('domcontentloaded');
  
  await expect(page.getByText('Montag')).toBeVisible();
});
