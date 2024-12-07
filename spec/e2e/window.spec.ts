import { test, expect } from '@playwright/test';
import { WindowPage } from '../../pageObject/window.page';

test.describe('Interacting with window and tabs', () => {
  test.beforeEach(async ({ page }) => {
    const window = new WindowPage(page);

    await window.goto();
  });

  test('Handling new tab', async ({ page, context }) => {
    const window = new WindowPage(page, context);

    const newPagePromise = window.pagePromise();
    await window.btnHome.click();
    const newPage = await newPagePromise;

    expect(await newPage?.title()).toEqual('LetCode with Koushik');
    expect(await page.title()).toEqual('Window handling - LetCode');
  });

  test('Handling new tab - another method', async ({ page, context }) => {
    const window = new WindowPage(page, context);

    const popupPromise = window.popupPromise();
    await window.btnHome.click();
    const newPage = await popupPromise;

    expect(await newPage?.title()).toEqual('LetCode with Koushik');
    expect(await page.title()).toEqual('Window handling - LetCode');
  });
});
