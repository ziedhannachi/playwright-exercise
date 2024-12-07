import { defineConfig, devices } from '@playwright/test';
import dotenv from 'dotenv';
dotenv.config();

/**
 * See https://playwright.dev/docs/test-configuration.
 */
export default defineConfig({
  fullyParallel: true,

  forbidOnly: true,

  retries: 0,

  workers: 5,

  reporter: [['html', { open: 'never' }]],

  use: {
    trace: 'retain-on-failure'
  },

  projects: [
    {
      name: 'E2E',
      testDir: './spec/e2e',
      testMatch: /.*\.spec\.ts/,
      use: {
        ...devices['Desktop Chrome'],
        baseURL: 'https://letcode.in',
        viewport: {
          width: 1920,
          height: 1080
        }
      }
    },

    // Api project requirements
    {
      name: 'setup',
      testDir: './spec/api',
      testMatch: /setup\.ts/
    },

    {
      name: 'cleanup',
      testDir: './spec/api',
      testMatch: /teardown\.ts/
    },

    {
      name: 'API',
      testDir: './spec/api',
      testMatch: /.*\.spec\.ts/,
      use: {
        baseURL: 'https://restful-booker.herokuapp.com'
      },
      dependencies: ['setup'],
      teardown: 'cleanup'
    }
  ],

  testMatch: /.spec.ts/
});
