import { test, expect } from '@playwright/test';
import { CalendarPage } from '../../pageObject/calendar.page';

test.describe('Interacting with calendar', () => {
  test.beforeEach(async ({ page }) => {
    const calendar = new CalendarPage(page);

    await calendar.goto();
  });

  test('Selecting today from static calendar', async ({ page }) => {
    const calendar = new CalendarPage(page);

    const today = new Date().toLocaleString('en-US', calendar.formatDate);
    await calendar.btnToday.click();

    expect(await calendar.textSelected.textContent()).toContain(`${today}`);
  });

  test('Selecting today from static calendar and clear input', async ({ page }) => {
    const calendar = new CalendarPage(page);

    await calendar.btnToday.click();
    await calendar.btnClear.click();

    await expect(calendar.textSelected).toBeHidden();
  });

  test('Selecting today from static calendar and add 10 minutes', async ({ page }) => {
    const calendar = new CalendarPage(page);

    const clickCount = 10;
    await calendar.btnToday.click();
    const actual = await calendar.textSelected.textContent();
    const today = new Date(actual ? actual : '');
    today.setMinutes(today.getMinutes() + clickCount);
    const added = today.toLocaleString('en-US', calendar.formatDate);
    await calendar.btnNext.click({ clickCount });

    expect(await calendar.textSelected.textContent()).toContain(`${added}`);
  });

  test('Selecting range date', async ({ page }) => {
    const calendar = new CalendarPage(page);

    await calendar.datepickerRange.click();
    await calendar.btnYearRange.click();
    await calendar.btnConfirmYear.click();
    await calendar.btnMonthRange.click();
    await calendar.btnConfirmMonth.click();
    await calendar.btnDayFrom.click();
    await calendar.btnDayTo.click();

    expect(await calendar.textSelected.textContent()).toContain('01-Jan-2023 to 12-Jan-2023');
  });
});
