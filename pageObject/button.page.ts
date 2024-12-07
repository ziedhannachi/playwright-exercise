import { Locator, Page } from '@playwright/test';
import { Base } from './base';

export class ButtonPage extends Base {
  readonly page: Page;
  readonly btnHome: Locator;
  readonly btnPosition: Locator;
  readonly btnColor: Locator;
  readonly btnProperty: Locator;
  readonly btnDisabled: Locator;

  constructor(page: Page) {
    super(page);
    this.page = page;
    this.btnHome = this.page.locator('button#home');
    this.btnPosition = this.page.locator('button#position');
    this.btnColor = this.page.locator('button#color');
    this.btnProperty = this.page.locator('button#property');
    this.btnDisabled = this.page.locator('button#isDisabled');
  }

  async goto() {
    await super.goto('/buttons');
  }
}
