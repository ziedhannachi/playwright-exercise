import { test, expect } from '@playwright/test';
import { DropdownPage } from '../../pageObject/dropdown.page';

test.describe('Interacting with dropdowns', () => {
  test.beforeEach(async ({ page }) => {
    const dropdown = new DropdownPage(page);

    await dropdown.goto();
  });

  test('Selecting a item from dropdown', async ({ page }) => {
    const dropdown = new DropdownPage(page);

    await dropdown.selectFruits.selectOption({ label: 'Apple' });

    expect(await dropdown.textSuccess.textContent()).toContain('Apple');
  });

  test('Selecting a item from multi-selector', async ({ page }) => {
    const dropdown = new DropdownPage(page);

    await dropdown.selectSuperheroes.selectOption({ label: 'Batman' });

    expect(await dropdown.textSuccess.textContent()).toContain('Batman');
  });

  test('Selecting two items from multi-selector', async ({ page }) => {
    const dropdown = new DropdownPage(page);

    await dropdown.selectSuperheroes.selectOption([{ label: 'Batman' }, { label: 'Batwoman' }]);

    expect(await dropdown.textSuccess.textContent()).toContain('Batman');
  });

  test('Selecting last item from dropdown', async ({ page }) => {
    const dropdown = new DropdownPage(page);

    const opts = await dropdown.optionsLang.all();
    await dropdown.selectLang.selectOption({ index: opts.length - 1 });

    expect(await dropdown.textSuccess.textContent()).toContain('C#');
  });

  test('Selecting specific item from dropdown and verify value', async ({ page }) => {
    const dropdown = new DropdownPage(page);

    await dropdown.selectCountry.selectOption({ value: 'India' });

    expect(await dropdown.selectCountry.inputValue()).toEqual('India');
  });
});
