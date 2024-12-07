import { test, expect } from '@playwright/test';
import { AjaxPage } from '../../pageObject/ajax.page';

test.describe('Interacting with AJAX requests', () => {
  test.beforeEach(async ({ page }) => {
    const ajax = new AjaxPage(page);

    await ajax.goto();
  });

  test('Handling AJAX requests', async ({ page }) => {
    const ajax = new AjaxPage(page);

    await ajax.btn.click();
    await ajax.successMessage.waitFor({ state: 'visible', timeout: 18000 });

    expect(await ajax.successMessage.textContent()).toContain('AJAX');
  });

  test('Handling AJAX requests with mocked response', async ({ page }) => {
    const ajax = new AjaxPage(page);
    const text = 'Mocked Response';

    await ajax.mockData(text);
    await ajax.btn.click();
    await ajax.successMessage.waitFor({ state: 'visible', timeout: 16000 });

    expect(await ajax.successMessage.textContent()).toEqual(text);
  });
});
