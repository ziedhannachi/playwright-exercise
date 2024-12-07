import { Locator, Page } from '@playwright/test';
import { Base } from './base';

export class DownloadPage extends Base {
  readonly page: Page;
  readonly xlsFile: Locator;

  constructor(page: Page) {
    super(page);
    this.page = page;
    this.xlsFile = this.page.locator('a#xls');
  }

  async goto() {
    await super.goto('/file');
  }

  downloadPromise() {
    return this.page.waitForEvent('download');
  }
}
