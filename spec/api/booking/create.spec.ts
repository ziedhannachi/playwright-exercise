import { test, expect } from '@playwright/test';

test.describe('Create booking', () => {
  test('Create basic booking information', async ({ request }) => {
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

    expect(res.status()).toEqual(200);
    expect(resJson.booking.firstname).toEqual('Jim');
  });

  test('Create booking with invalid information', async ({ request }) => {
    const res = await request.post('/booking', {
      data: {
        firstname: 'Jim'
      }
    });

    expect(res.status()).toEqual(500);
  });
});
