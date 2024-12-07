import { Locator, Page } from '@playwright/test';
import { Base } from './base';

export class CalendarPage extends Base {
  readonly page: Page;
  readonly datepicker: Locator;
  readonly datepickerRange: Locator;
  readonly btnToday: Locator;
  readonly btnNext: Locator;
  readonly btnClear: Locator;
  readonly btnYearRange: Locator;
  readonly btnConfirmYear: Locator;
  readonly btnMonthRange: Locator;
  readonly btnConfirmMonth: Locator;
  readonly btnDayRange: Locator;
  readonly btnDayFrom: Locator;
  readonly btnDayTo: Locator;
  readonly modalRange: Locator;
  readonly textSelected: Locator;
  readonly formatDate: Intl.DateTimeFormatOptions;

  constructor(page: Page) {
    super(page);
    this.page = page;
    this.datepicker = this.page.locator('nwb-date-picker');
    this.datepickerRange = this.datepicker.nth(1);
    this.btnToday = this.datepicker.getByRole('button', { name: 'Today' });
    this.btnNext = this.datepicker.locator('.timepicker-minutes > span.timepicker-next');
    this.btnClear = this.datepicker.getByRole('button', { name: 'Clear' });
    this.modalRange = this.page.locator('div.datepicker.is-active');
    this.btnYearRange = this.modalRange.locator(
      'div.datepicker-nav > div > div.datepicker-nav-year'
    );
    this.btnConfirmYear = this.modalRange.locator('div[data-year="2023"]');
    this.btnMonthRange = this.modalRange.locator(
      'div.datepicker-nav > div > div.datepicker-nav-month'
    );
    this.btnConfirmMonth = this.modalRange.locator('div[data-month="01"]');
    this.btnDayRange = this.modalRange.locator('div.is-current-month');
    this.btnDayFrom = this.btnDayRange.getByRole('button', { name: '1', exact: true });
    this.btnDayTo = this.btnDayRange.getByRole('button', { name: '12', exact: true });
    this.textSelected = this.page.getByText('You have selected');
    this.formatDate = {
      month: 'numeric',
      day: 'numeric',
      year: '2-digit',
      hour: 'numeric',
      minute: 'numeric',
      hour12: true
    };
  }

  async goto() {
    await super.goto('/calendar');
  }
}
