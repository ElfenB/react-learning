import { expect, test } from '@playwright/test';

// Test with lightmode
test.use({ colorScheme: 'light' });

test('Tenzies game', async ({ page }) => {
  await page.goto('/eight');

  // Set every button that contains a 2
  // TODO: Implement
  
  // Show last 3 games
  await page.getByText('Game: 1').click();
  await expect(page.getByRole('heading', { name: 'Last 3 entries' })).toBeVisible();

  // Write your name
  await page.getByPlaceholder('Nickname').click();
  await page.getByPlaceholder('Nickname').fill('Playwright');

  // Save Results
  // TODO: Activate after implementing above
  // await page.getByRole('button', { name: 'Save & Reset' }).click();

  // Delete last games
  await page.getByText('🗑️').click();
  page.once('dialog', (dialog) => {
    console.log(`Dialog message: ${dialog.message()}`);
    dialog.dismiss().catch(() => {
      console.log('popup dismissed');
    });
  });
});

// Same thing in dark mode
test.use({ colorScheme: 'dark' });

// TODO: Implement
