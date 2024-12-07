import { test, expect } from '@playwright/test';
import { ElementsPage } from '../../pageObject/elements.page';

test.describe('Interacting with multiple elements', () => {
  test.beforeEach(async ({ page }) => {
    const elements = new ElementsPage(page);

    await elements.goto();
  });

  test('Searching for git user', async ({ page }) => {
    const elements = new ElementsPage(page);

    await elements.inputUsername.fill('armindojr');
    await elements.btnSearch.click();
    await elements.imgUser.waitFor({ state: 'visible' });
    const repos = await elements.listRepo.all();

    expect(await elements.textTitle.textContent()).toEqual('Armindo Junior');
    expect(await elements.textSubtitle.textContent()).toContain('Brazil');
    expect(repos.length + 1).toBeGreaterThan(0);
    expect(repos.length + 1).toBeLessThanOrEqual(10);
  });
});
