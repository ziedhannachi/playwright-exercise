import { Locator, Page } from '@playwright/test';
import { Base } from './base';

export class HomePage extends Base {
  readonly page: Page;
  readonly textWorkspaces: Locator;

  constructor(page: Page) {
    super(page);
    this.page = page;
    this.textWorkspaces = this.page.getByText('test automation');
  }

  async goto() {
    await super.goto('/');
  }
}
