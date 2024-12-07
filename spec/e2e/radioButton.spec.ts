import { test, expect } from '@playwright/test';
import { RadioPage } from '../../pageObject/radio.page';

test.describe('Interacting with Radio buttons and checkboxes', () => {
  test.beforeEach(async ({ page }) => {
    const radio = new RadioPage(page);

    await radio.goto();
  });

  test('Selecting an option on radio button', async ({ page }) => {
    const radio = new RadioPage(page);

    await radio.radioYes.check();
    await radio.radioNo.check();

    expect(await radio.radioYes.isChecked()).toBeFalsy();
    expect(await radio.radioNo.isChecked()).toBeTruthy();
  });

  test("Selecting radio button don't uncheck another", async ({ page }) => {
    const radio = new RadioPage(page);

    await radio.radioBug.check();
    await radio.radioNoBug.check();

    expect(!(await radio.radioBug.isChecked())).toBeFalsy();
  });

  test('Finding wich radio button is checked', async ({ page }) => {
    const radio = new RadioPage(page);

    expect(await radio.radioChecked.textContent()).toContain('Bar');
  });

  test('Checking if radio button is enabled', async ({ page }) => {
    const radio = new RadioPage(page);

    expect(await radio.radioDisabled.isEnabled()).toBeFalsy();
  });

  test('Confirming if checkbox is checked', async ({ page }) => {
    const radio = new RadioPage(page);

    expect(await radio.checkboxRemember.isChecked()).toBeTruthy();
  });

  test('Checking checkbox of terms agreement', async ({ page }) => {
    const radio = new RadioPage(page);

    await radio.checkboxAccept.check();

    expect(await radio.checkboxAccept.isChecked()).toBeTruthy();
  });
});
