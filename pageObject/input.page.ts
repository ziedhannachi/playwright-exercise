import { Locator, Page } from '@playwright/test';
import { Base } from './base';

export class InputPage extends Base {
  readonly page: Page;
  readonly inputFullName: Locator;
  readonly inputJoin: Locator;
  readonly inputGetMe: Locator;
  readonly inputClearMe: Locator;
  readonly inputDisabled: Locator;
  readonly inputReadOnly: Locator;

  constructor(page: Page) {
    super(page);
    this.page = page;
    this.inputFullName = this.page.locator('input#fullName');
    this.inputJoin = this.page.locator('input#join');
    this.inputGetMe = this.page.locator('input#getMe');
    this.inputClearMe = this.page.locator('input#clearMe');
    this.inputDisabled = this.page.locator('input#noEdit');
    this.inputReadOnly = this.page.locator('input#dontwrite');
  }

  async goto() {
    await super.goto('/edit');
  }
}
