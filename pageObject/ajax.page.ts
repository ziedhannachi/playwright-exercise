import { Locator, Page } from '@playwright/test';
import { Base } from './base';

export class AjaxPage extends Base {
  readonly page: Page;
  readonly btn: Locator;
  readonly successMessage: Locator;

  constructor(page: Page) {
    super(page);
    this.page = page;
    this.btn = this.page.locator('button#ajaxButton');
    this.successMessage = this.page.locator('p.bg-success');
  }

  async goto() {
    await super.goto('http://www.uitestingplayground.com/ajax');
  }

  async mockData(text: string) {
    this.page.route('http://www.uitestingplayground.com/ajaxdata', async route => {
      await route.fulfill({
        status: 200,
        headers: {
          'Content-Type': 'text/html; charset=utf-8'
        },
        body: text
      });
    });
  }
}
