import { test, expect } from '@playwright/test';
import { getElementCoordinates } from '../../utils';

test.describe('Interacting with drag and drop element', () => {
  test('Drag element within box', async ({ page }) => {
    await page.goto('/draggable');
    const draggable = page.locator('div#sample-box');
    const initCoord = await getElementCoordinates(draggable);

    await page.mouse.move(initCoord.x, initCoord.y, { steps: 10 });
    await draggable.hover();
    await page.mouse.down();
    await page.mouse.move(initCoord.x + 200, initCoord.y + 200, { steps: 10 });
    await page.mouse.up();

    const finishCoord = await getElementCoordinates(draggable);

    expect(initCoord.x).toBeLessThan(finishCoord.x);
    expect(initCoord.y).toBeLessThan(finishCoord.y);
  });

  test('Drag and drop element to destination box', async ({ page }) => {
    await page.goto('/dropable');
    const draggable = page.locator('div#draggable');
    const destination = page.locator('div#droppable');
    await draggable.dragTo(destination);

    expect(await destination.locator('p').textContent()).toEqual('Dropped!');
  });

  test('Drag and drop element to destination list', async ({ page }) => {
    await page.goto('/sortable');
    const draggable = page.locator('div#cdk-drop-list-0 > div').first();
    const destination = page.locator('div#cdk-drop-list-1');
    const initCoord = await getElementCoordinates(draggable);
    const destinationCoord = await getElementCoordinates(destination);

    await page.mouse.move(initCoord.x, initCoord.y, { steps: 10 });
    await draggable.hover();
    await page.mouse.down();
    await page.mouse.move(destinationCoord.x + 200, destinationCoord.y, { steps: 10 });
    await page.mouse.up();

    const items = await page.locator('div#cdk-drop-list-1 > div').all();

    expect(items.length).toEqual(6);
  });

  test('Drag and drop to select items from list', async ({ page }) => {
    await page.goto('/selectable');
    const list = page.locator('div#container');
    const listCoord = await getElementCoordinates(list);

    await page.mouse.move(listCoord.x, listCoord.y, { steps: 10 });
    await page.mouse.down();
    await page.mouse.move(listCoord.x, listCoord.y + 500, { steps: 10 });
    await page.mouse.up();

    const items = await page.locator('div.ui-selected').all();

    expect(items.length).toEqual(9);
  });

  test('Drag and drop slider to view countries', async ({ page }) => {
    await page.goto('/slider');
    // min 1 decimal value corresponds to x = 0
    // max 50 decimal value corresponds to x = 720
    const draggable = page.locator('input#generate');
    await draggable.dragTo(draggable, {
      sourcePosition: { x: 0, y: 0 },
      targetPosition: { x: 288, y: 0 }
    });
    await page.locator('button.is-primary').click();
    const items = await page.locator('p.has-text-primary-light').textContent();
    const countries = items?.split(' - ');

    expect(countries?.length).toEqual(20);
  });
});
