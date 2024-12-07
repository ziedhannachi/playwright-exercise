import { test as setup } from '@playwright/test';
import { writeFile } from 'fs/promises';

setup('cleanup', async () => {
  const defaultStorage = {
    token: ''
  };

  await writeFile('./auth/api.json', JSON.stringify(defaultStorage, undefined, 4));
});
