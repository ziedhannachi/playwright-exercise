import { test, expect } from '@playwright/test';
import { ShadowPage } from '../../pageObject/shadow.page';

test.describe('Interacting with shadow DOM', () => {
  test.beforeEach(async ({ page }) => {
    const shadow = new ShadowPage(page);

    await shadow.goto();
  });

  test('Filling inputs inside shadow DOM', async ({ page }) => {
    const shadow = new ShadowPage(page);

    await shadow.inputFirstName.fill('Armindo');

    expect(await shadow.inputFirstName.inputValue()).toEqual('Armindo');

    // Playwright doesn't works with closed shadow dom
    // await shadow.inputLastName.fill('Junior');
    // await shadow.inputEmail.fill('test@mailinator.com');
  });
});
