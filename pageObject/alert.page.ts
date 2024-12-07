import { Locator, Page, expect } from '@playwright/test';
import { Base } from './base';

export class AlertPage extends Base {
  readonly page: Page;
  readonly btnAccept: Locator;
  readonly btnConfirm: Locator;
  readonly btnPrompt: Locator;
  readonly btnSweetAlert: Locator;
  readonly textMyName: Locator;
  readonly textSweetAlert: Locator;
  readonly modal: Locator;
  readonly modalContent: Locator;

  constructor(page: Page) {
    super(page);
    this.page = page;
    this.btnAccept = this.page.locator('button#accept');
    this.btnConfirm = this.page.locator('button#confirm');
    this.btnPrompt = this.page.locator('button#prompt');
    this.btnSweetAlert = this.page.locator('button#modern');
    this.textMyName = this.page.locator('p#myName');
    this.textSweetAlert = this.page.locator('p.title');
    this.modal = this.page.locator('div.modal.is-active');
    this.modalContent = this.page.locator('div.modal-content');
  }

  async goto() {
    await super.goto('/alert');
  }

  async handleDialog(options: { type: string; text: string; msg?: string }) {
    this.page.on('dialog', async dialog => {
      expect(dialog.type()).toContain(options.type);
      expect(dialog.message()).toContain(options.text);
      await dialog.accept(options.msg);
    });
  }
}
