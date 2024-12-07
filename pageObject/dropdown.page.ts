import { Locator, Page } from '@playwright/test';
import { Base } from './base';

export class DropdownPage extends Base {
  readonly page: Page;
  readonly selectCountry: Locator;
  readonly selectFruits: Locator;
  readonly selectLang: Locator;
  readonly selectSuperheroes: Locator;
  readonly optionsLang: Locator;
  readonly textSuccess: Locator;

  constructor(page: Page) {
    super(page);
    this.page = page;
    this.selectCountry = this.page.locator('select#country');
    this.selectFruits = this.page.locator('select#fruits');
    this.selectLang = this.page.locator('select#lang');
    this.selectSuperheroes = this.page.locator('select#superheros');
    this.optionsLang = this.selectLang.locator('option');
    this.textSuccess = this.page.locator('div.content > div.is-success > p.subtitle');
  }

  async goto() {
    await super.goto('/dropdowns');
  }
}
