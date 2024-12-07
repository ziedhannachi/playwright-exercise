import { Locator, Page } from '@playwright/test';
import { Base } from './base';

export class ShadowPage extends Base {
  readonly page: Page;
  readonly inputFirstName: Locator;
  readonly inputLastName: Locator;
  readonly inputEmail: Locator;

  constructor(page: Page) {
    super(page);
    this.page = page;
    this.inputFirstName = this.page.locator('input#fname');
    this.inputLastName = this.page.locator('input#lname');
    this.inputEmail = this.page.locator('input#email');
  }

  async goto() {
    await super.goto('/shadow');
  }
}
