import { Locator, Page } from '@playwright/test';
import { Base } from './base';

export class RadioPage extends Base {
  readonly page: Page;
  readonly radioYes: Locator;
  readonly radioNo: Locator;
  readonly radioBug: Locator;
  readonly radioNoBug: Locator;
  readonly radioChecked: Locator;
  readonly radioDisabled: Locator;
  readonly checkboxRemember: Locator;
  readonly checkboxAccept: Locator;

  constructor(page: Page) {
    super(page);
    this.page = page;
    this.radioYes = this.page.locator('input#one');
    this.radioNo = this.page.locator('input#two');
    this.radioBug = this.page.locator('input#bug');
    this.radioNoBug = this.page.locator('input#nobug');
    this.radioChecked = this.page.locator('div:nth-child(4) > div > label', {
      has: this.page.locator('input:checked')
    });
    this.radioDisabled = this.page.locator('input#maybe');
    this.checkboxRemember = this.page.getByText(' Remember me');
    this.checkboxAccept = this.page.getByText('I agree to the');
  }

  async goto() {
    await super.goto('/radio');
  }
}
