import { test, expect } from '@playwright/test';
import { IframePage } from '../../pageObject/iframe.page';

test.describe('Interacting with iframes', () => {
  test.beforeEach(async ({ page }) => {
    const iframe = new IframePage(page);

    await iframe.goto();
  });

  test('Filling inputs inside iframe', async ({ page }) => {
    const iframe = new IframePage(page);

    await iframe.inputName.fill('Armindo');
    await iframe.inputLname.fill('Junior');

    expect(await iframe.inputName.inputValue()).toEqual('Armindo');
    expect(await iframe.inputLname.inputValue()).toEqual('Junior');
  });

  test('Filling an input inside nested iframe', async ({ page }) => {
    const iframe = new IframePage(page);

    await iframe.inputEmail.fill('test@mailinator.com');

    expect(await iframe.inputEmail.inputValue()).toEqual('test@mailinator.com');
  });
});
