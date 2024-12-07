import { test, expect } from '@playwright/test';
import { DownloadPage } from '../../pageObject/download.page';

test.describe('Interacting with downloadable content', () => {
  test.beforeEach(async ({ page }) => {
    const download = new DownloadPage(page);

    await download.goto();
  });

  test('Handling new downloads', async ({ page }) => {
    const download = new DownloadPage(page);

    const downloadPromise = download.downloadPromise();
    await download.xlsFile.click();
    const downloadResolve = await downloadPromise;

    expect(downloadResolve.suggestedFilename()).toContain('sample');
    await downloadResolve.delete();
  });
});
