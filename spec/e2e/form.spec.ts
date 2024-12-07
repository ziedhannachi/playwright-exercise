import { test } from '@playwright/test';
import { FormsPage } from '../../pageObject/forms.page';

test.describe('Interacting with form', () => {
  test.beforeEach(async ({ page }) => {
    const form = new FormsPage(page);

    await form.goto();
  });

  test('Filling form with random data', async ({ page }) => {
    const form = new FormsPage(page);

    await form.fillForm();
    await form.submit.click();
    await page.waitForTimeout(2000);
  });
});
