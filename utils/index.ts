import { Locator } from '@playwright/test';
import * as storage from '../auth/api.json';

export async function getElementCoordinates(el: Locator) {
  await el.waitFor({ state: 'visible' });
  const result = await el.boundingBox();

  if (result) {
    return result;
  } else {
    throw new Error("Element doesn't have boundary or is inaccessible!");
  }
}

export async function auth() {
  return storage.token;
}
