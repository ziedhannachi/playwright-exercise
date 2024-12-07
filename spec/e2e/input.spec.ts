import { test, expect } from '@playwright/test';
import { InputPage } from '../../pageObject/input.page';

test.describe('Interacting with inputs', () => {
  test.beforeEach(async ({ page }) => {
    const input = new InputPage(page);

    await input.goto();
  });

  test('Filling an input', async ({ page }) => {
    const input = new InputPage(page);
    const name = 'Armindo Junior';

    await input.inputFullName.fill(name);

    expect(await input.inputFullName.inputValue()).toEqual(name);
  });

  test('Pressing key', async ({ page }) => {
    const input = new InputPage(page);

    await input.inputJoin.fill('Foo Bar');
    await page.keyboard.press('Tab');
  });

  test('Checking text', async ({ page }) => {
    const input = new InputPage(page);

    expect(await input.inputGetMe.inputValue()).toEqual('ortonikc');
  });

  test('Clearing input', async ({ page }) => {
    const input = new InputPage(page);

    await input.inputClearMe.clear();

    expect(await input.inputClearMe.inputValue()).toEqual('');
  });

  test('Checking if input is disabled', async ({ page }) => {
    const input = new InputPage(page);

    expect(await input.inputDisabled.isDisabled()).toBeTruthy();
  });

  test('Checking if input is read only', async ({ page }) => {
    const input = new InputPage(page);

    expect(await input.inputReadOnly.isEditable()).toBeFalsy();
  });
});
