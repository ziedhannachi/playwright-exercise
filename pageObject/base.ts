import { Locator, Page } from '@playwright/test';

export class Base {
  readonly page: Page;
  readonly btnWorkspaces: Locator;

  constructor(page: Page) {
    this.page = page;

    // Navbar locators
    this.btnWorkspaces = this.page.locator('a#testing');
  }

  async goto(path: string) {
    await this.page.goto(path);
  }
}
