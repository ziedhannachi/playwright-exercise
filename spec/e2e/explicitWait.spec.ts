import { test, expect } from '@playwright/test';
import { ButtonPage } from '../../pageObject/button.page';
import { DropdownPage } from '../../pageObject/dropdown.page';
import { AlertPage } from '../../pageObject/alert.page';
import { HomePage } from '../../pageObject/home.page';

test.describe('Creating explicit wait during test', () => {
  test('Wait for button to be visible', async ({ page }) => {
    const button = new ButtonPage(page);

    await button.goto();
    await button.btnHome.waitFor({ state: 'visible' });

    expect(await page.title()).toEqual('Interact with Button fields');
  });

  test('Wait for button to be invisible', async ({ page }) => {
    const dropdown = new DropdownPage(page);
    const button = new ButtonPage(page);

    await dropdown.goto();
    await button.btnHome.waitFor({ state: 'detached' });

    expect(await page.title()).toEqual('LetCode with Koushik');
  });

  test('Wait for text to be visible', async ({ page }) => {
    const home = new HomePage(page);

    await home.goto();
    await home.btnWorkspaces.click();
    await home.textWorkspaces.waitFor({ state: 'visible' });

    expect(await page.title()).toEqual('LetCode - Testing Hub');
  });

  test('Wait for alert to be hidden and present in DOM', async ({ page }) => {
    const alerts = new AlertPage(page);

    await alerts.goto();
    await alerts.modalContent.waitFor({ state: 'attached' });
    await alerts.modalContent.waitFor({ state: 'hidden' });

    expect(await page.title()).toEqual('LetCode with Koushik');
  });
});
