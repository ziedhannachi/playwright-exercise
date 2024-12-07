import { Locator, Page } from '@playwright/test';
import { Base } from './base';

export class ElementsPage extends Base {
  readonly page: Page;
  readonly inputUsername: Locator;
  readonly btnSearch: Locator;
  readonly imgUser: Locator;
  readonly textTitle: Locator;
  readonly textSubtitle: Locator;
  readonly listRepo: Locator;

  constructor(page: Page) {
    super(page);
    this.page = page;
    this.inputUsername = this.page.locator('input[name="username"]');
    this.btnSearch = this.page.locator('button#search');
    this.imgUser = this.page.locator('img[src*="avatar"]');
    this.textTitle = this.page.locator('p.title');
    this.textSubtitle = this.page.locator('p.subtitle');
    this.listRepo = this.page.locator('app-gitrepos > div > div > ol > li');
  }

  async goto() {
    await super.goto('/elements');
  }
}
