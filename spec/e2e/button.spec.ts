import { test, expect } from '@playwright/test';
import { ButtonPage } from '../../pageObject/button.page';
import { getElementCoordinates } from '../../utils';

test.describe('Interacting with buttons', () => {
  test.beforeEach(async ({ page }) => {
    const button = new ButtonPage(page);

    await button.goto();
  });

  test('Clicking on a button', async ({ page }) => {
    const button = new ButtonPage(page);

    await button.btnHome.click();

    await expect(page).toHaveURL('https://letcode.in/');
  });

  test('Getting button position on screen', async ({ page }) => {
    const button = new ButtonPage(page);

    const result = await getElementCoordinates(button.btnPosition);

    expect(result.x).toEqual(312);
    expect(result.y).toEqual(338);
  });

  test('Getting button color from css', async ({ page }) => {
    const button = new ButtonPage(page);

    const color = await button.btnColor.evaluate(element =>
      window.getComputedStyle(element).getPropertyValue('background-color')
    );

    expect(color).toEqual('rgb(138, 77, 118)');
  });

  test('Getting button height and width', async ({ page }) => {
    const button = new ButtonPage(page);

    const result = await getElementCoordinates(button.btnProperty);

    expect(result.height).toEqual(40);
    expect(result.width).toBeGreaterThanOrEqual(175);
    expect(result.width).toBeLessThanOrEqual(177);
  });

  test('Checking if button is disabled', async ({ page }) => {
    const button = new ButtonPage(page);

    const status = await button.btnDisabled.first().isDisabled();

    expect(status).toEqual(true);
  });

  test('Check text after long press button', async ({ page }) => {
    const button = new ButtonPage(page);

    const buttonList = await button.btnDisabled.all();
    await buttonList[1].click({ delay: 5000 });
    const text = await buttonList[1].textContent();

    expect(text).toEqual('Button has been long pressed');
  });
});
