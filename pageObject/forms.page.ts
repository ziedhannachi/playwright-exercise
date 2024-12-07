import { Locator, Page } from '@playwright/test';
import { fakerPT_BR as faker } from '@faker-js/faker';
import { Base } from './base';

export class FormsPage extends Base {
  readonly page: Page;
  readonly firstName: Locator;
  readonly lastName: Locator;
  readonly email: Locator;
  readonly countryCode: Locator;
  readonly phoneNumber: Locator;
  readonly address1: Locator;
  readonly address2: Locator;
  readonly state: Locator;
  readonly postalCode: Locator;
  readonly country: Locator;
  readonly birthDay: Locator;
  readonly gender: (option: string) => Locator;
  readonly termsAgreement: Locator;
  readonly submit: Locator;

  constructor(page: Page) {
    super(page);
    this.page = page;
    this.firstName = this.page.locator('input#firstname');
    this.lastName = this.page.locator('input#lasttname');
    this.email = this.page.locator('input#email');
    this.countryCode = this.page.locator(
      'div:nth-child(2) > div:nth-child(2) > div > div > div > select'
    );
    this.phoneNumber = this.page.locator('input#Phno');
    this.address1 = this.page.locator('input#Addl1');
    this.address2 = this.page.locator('input#Addl2');
    this.state = this.page.locator('input#state');
    this.postalCode = this.page.locator('input#postalcode');
    this.country = this.page.locator(
      'div:nth-child(5) > div:nth-child(2) > div > div > div > select'
    );
    this.birthDay = this.page.locator('input#Date');
    this.gender = option => {
      return this.page.locator(`input#${option}`);
    };
    this.termsAgreement = this.page.locator('input[type="checkbox"]');
    this.submit = this.page.locator('input[type="submit"]');
  }

  async goto() {
    await super.goto('/forms');
  }

  async fillForm() {
    const fName = faker.person.firstName();
    const lName = faker.person.lastName();
    const email = faker.internet.email({
      firstName: fName,
      lastName: lName,
      provider: 'mailinator.com'
    });
    const phone = `9${faker.string.numeric({ length: 9 })}`;
    const option = faker.helpers.arrayElement(['male', 'female', 'trans']);

    await this.firstName.fill(fName);
    await this.lastName.fill(lName);
    await this.email.fill(email);
    await this.countryCode.selectOption('55');
    await this.phoneNumber.fill(phone);
    await this.address1.fill('line 1');
    await this.address2.fill('line 2');
    await this.state.fill('São Paulo');
    await this.postalCode.fill('15710-000');
    await this.country.selectOption('Brazil');
    await this.birthDay.fill('2000-01-01');
    await this.gender(option).check();
    await this.termsAgreement.check();
  }
}
