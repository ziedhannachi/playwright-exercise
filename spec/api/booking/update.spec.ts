import { test, expect } from '@playwright/test';
import { auth } from '../../../utils';

test.describe('Update booking', () => {
  let token: string;

  test.beforeAll(async () => {
    token = await auth();
  });

  // Partial update with PUT method
  test('Complete update existing booking information', async ({ request }) => {
    const res = await request.put('/booking/1', {
      headers: {
        Cookie: `token=${token}`
      },
      data: {
        firstname: 'James',
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
    expect(resJson.firstname).toEqual('James');
  });

  test('Complete update existing booking with invalid information', async ({ request }) => {
    const res = await request.put('/booking/1', {
      headers: {
        Cookie: `token=${token}`
      },
      data: {
        firstname: 'James'
      }
    });

    expect(res.status()).toEqual(400);
  });

  test('Complete update booking information with missing id', async ({ request }) => {
    const res = await request.put('/booking/22222222222222222', {
      headers: {
        Cookie: `token=${token}`
      },
      data: {
        firstname: 'James',
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

    expect(res.status()).toEqual(405);
  });

  test('Complete update booking information with invalid id', async ({ request }) => {
    const res = await request.put('/booking/aaaaa', {
      headers: {
        Cookie: `token=${token}`
      },
      data: {
        firstname: 'James',
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

    expect(res.status()).toEqual(405);
  });

  // Partial update with PATCH method
  test('Partial update existing booking information', async ({ request }) => {
    const res = await request.patch('/booking/1', {
      headers: {
        Cookie: `token=${token}`
      },
      data: {
        firstname: 'James'
      }
    });

    const resJson = await res.json();

    expect(res.status()).toEqual(200);
    expect(resJson.firstname).toEqual('James');
  });

  test('Partial update booking information with missing id', async ({ request }) => {
    const res = await request.patch('/booking/22222222222222222', {
      headers: {
        Cookie: `token=${token}`
      },
      data: {
        firstname: 'James'
      }
    });

    expect(res.status()).toEqual(405);
  });

  test('Partial update booking information with invalid id', async ({ request }) => {
    const res = await request.patch('/booking/aaaaa', {
      headers: {
        Cookie: `token=${token}`
      },
      data: {
        firstname: 'James'
      }
    });

    expect(res.status()).toEqual(405);
  });
});
