import { test, expect } from '@playwright/test';
import { AlertPage } from '../../pageObject/alert.page';

test.describe('Interacting with alerts', () => {
  test.beforeEach(async ({ page }) => {
    const alerts = new AlertPage(page);

    await alerts.goto();
  });

  test('Handling accept alert', async ({ page }) => {
    const alerts = new AlertPage(page);

    alerts.handleDialog({ type: 'alert', text: 'Hey! Welcome to LetCode' });

    await alerts.btnAccept.click();
  });

  test('Handling confirm alert', async ({ page }) => {
    const alerts = new AlertPage(page);

    alerts.handleDialog({ type: 'confirm', text: 'Are you happy with LetCode?' });

    await alerts.btnConfirm.click();
  });

  test('Handling prompt alert', async ({ page }) => {
    const alerts = new AlertPage(page);
    const msg = 'Armindo Junior';

    alerts.handleDialog({ type: 'prompt', text: 'Enter your name', msg });
    await alerts.btnPrompt.click();

    expect(await alerts.textMyName.textContent()).toContain(msg);
  });

  test('Handling sweet alert', async ({ page }) => {
    const alerts = new AlertPage(page);

    await alerts.btnSweetAlert.click();
    await alerts.modal.waitFor({ state: 'visible' });

    expect(await alerts.textSweetAlert.textContent()).toContain('Modern Alert');
  });
});
