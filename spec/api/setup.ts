import { test as setup } from '@playwright/test';
import { writeFile } from 'fs/promises';

setup('login', async ({ request }) => {
  const res = await request.post('https://restful-booker.herokuapp.com/auth', {
    data: {
      username: process.env.API_USER,
      password: process.env.API_PASS
    }
  });

  const resJson = await res.json();

  const defaultStorage = {
    token: resJson.token
  };

  await writeFile('./auth/api.json', JSON.stringify(defaultStorage, undefined, 4));
});
