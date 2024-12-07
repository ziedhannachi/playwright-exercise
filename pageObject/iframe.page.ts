import { FrameLocator, Locator, Page } from '@playwright/test';
import { Base } from './base';

export class IframePage extends Base {
  readonly page: Page;
  readonly frame: FrameLocator;
  readonly innerFrame: FrameLocator;
  readonly inputName: Locator;
  readonly inputLname: Locator;
  readonly inputEmail: Locator;

  constructor(page: Page) {
    super(page);
    this.page = page;
    this.frame = this.page.frameLocator('iframe#firstFr');
    this.innerFrame = this.frame.frameLocator('iframe[src="innerFrame"]');
    this.inputName = this.frame.locator('input[name="fname"]');
    this.inputLname = this.frame.locator('input[name="lname"]');
    this.inputEmail = this.innerFrame.locator('input[name="email"]');
  }

  async goto() {
    await super.goto('/frame');
  }
}
