import { test, expect } from '@playwright/test';
import { auth } from '../../../utils';

test.describe('Delete booking', () => {
  let token: string;
  let bookingid: string;

  test.beforeAll(async ({ request }) => {
    token = await auth();

    // Create booking to be deleted
    const res = await request.post('/booking', {
      data: {
        firstname: 'Jim',
        lastname: 'Brown',
        totalprice: 111,
        depositpaid: true,
        bookingdates: {
          checkin: '2018-01-01',
          checkout: '2019-01-01'
        },
        additionalneeds: 'Breakfast'
      }
    });

    const resJson = await res.json();
    bookingid = resJson.bookingid;
  });

  test('Delete existing booking', async ({ request }) => {
    const res = await request.delete(`/booking/${bookingid}`, {
      headers: {
        Cookie: `token=${token}`
      }
    });

    expect(res.status()).toEqual(201);
  });

  test('Delete booking with missing id', async ({ request }) => {
    const res = await request.delete(`/booking/22222222222222222`, {
      headers: {
        Cookie: `token=${token}`
      }
    });

    expect(res.status()).toEqual(405);
  });

  test('Delete booking with invalid id', async ({ request }) => {
    const res = await request.delete(`/booking/aaaaa`, {
      headers: {
        Cookie: `token=${token}`
      }
    });

    expect(res.status()).toEqual(405);
  });
});
