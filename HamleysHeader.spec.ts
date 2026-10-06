import { test } from '@playwright/test';

import { TestCase01Page } from '../pages/TestCase01Page';
import { TestCase02Page } from '../pages/TestCase02Page';
import { TestCase03Page } from '../pages/TestCase03Page';
import { TestCase04Page } from '../pages/TestCase04Page';
import { TestCase05Page } from '../pages/TestCase05Page';
import { TestCase06Page } from '../pages/TestCase06Page';
import { TestCase07Page } from '../pages/TestCase07Page';
import { TestCase08Page } from '../pages/TestCase08Page';
import { TestCase09Page } from '../pages/TestCase09Page';
import { TestCase10Page } from '../pages/TestCase10Page';
import { TestCase11Page } from '../pages/TestCase11Page';
import { TestCase12Page } from '../pages/TestCase12Page';
import { TestCase13Page } from '../pages/TestCase13Page';
import { TestCase14Page } from '../pages/TestCase14Page';
import { TestCase15Page } from '../pages/TestCase15Page';
import { TestCase16Page } from '../pages/TestCase16Page';
import { TestCase17Page } from '../pages/TestCase17Page';
import { TestCase18Page } from '../pages/TestCase18Page';
import { TestCase19Page } from '../pages/TestCase19Page';
import { TestCase20Page } from '../pages/TestCase20Page';

import Logger from '../utils/Logger';
import { takeScreenshot } from '../utils/Screenshot';

test.beforeEach(
  async ({}, testInfo) => {
    Logger.info(
      `STARTED: ${testInfo.title}`
    );
  }
);

test.afterEach(
  async ({ page }, testInfo) => {
    if (
      testInfo.status ===
      testInfo.expectedStatus
    ) {
      Logger.info(
        `PASSED: ${testInfo.title}`
      );
    } else {
      Logger.error(
        `FAILED: ${testInfo.title}`
      );

      await takeScreenshot(
        page,
        testInfo.title
      );
    }
  }
);

test.describe(
  'Hamleys Product Flow Test Cases',
  () => {

    test(
      'TC01 - Construction Toys Flow',
      async ({ page }) => {
        await new TestCase01Page(page).execute();
      }
    );

    test(
      'TC02 - LEGO Shop By Brand Flow',
      async ({ page }) => {
        await new TestCase02Page(page).execute();
      }
    );

    test(
      'TC03 - Art and Craft Flow',
      async ({ page }) => {
        await new TestCase03Page(page).execute();
      }
    );

    test(
      'TC04 - Games and Puzzles Flow',
      async ({ page }) => {
        await new TestCase04Page(page).execute();
      }
    );

    test(
      'TC05 - Outdoor Toys Flow',
      async ({ page }) => {
        await new TestCase05Page(page).execute();
      }
    );

    test(
      'TC06 - Premium Dolls Flow',
      async ({ page }) => {
        await new TestCase06Page(page).execute();
      }
    );

    test(
      'TC07 - Soft Toys Flow',
      async ({ page }) => {
        await new TestCase07Page(page).execute();
      }
    );

    test(
      'TC08 - Vehicles and Tracksets Flow',
      async ({ page }) => {
        await new TestCase08Page(page).execute();
      }
    );

    test(
      'TC09 - Barbie Filter Flow',
      async ({ page }) => {
        await new TestCase09Page(page).execute();
      }
    );

    test(
      'TC10 - Negative Validation Flow',
      async ({ page }) => {
        await new TestCase10Page(page).execute();
      }
    );

    test(
      'TC11 - Marvel Filter Flow',
      async ({ page }) => {
        await new TestCase11Page(page).execute();
      }
    );

    test(
      'TC12 - Disney Coupon Flow',
      async ({ page }) => {
        await new TestCase12Page(page).execute();
      }
    );

    test(
      'TC13 - Skillmatics Search Flow',
      async ({ page }) => {
        await new TestCase13Page(page).execute();
      }
    );

    test(
      'TC14 - 3-5 Years Games Filter Flow',
      async ({ page }) => {
        await new TestCase14Page(page).execute();
      }
    );

    test(
      'TC15 - Black Panther Product Flow',
      async ({ page }) => {
        await new TestCase15Page(page).execute();
      }
    );

    test(
      'TC16 - Farmers Market Flow',
      async ({ page }) => {
        await new TestCase16Page(page).execute();
      }
    );

    test(
      'TC17 - Bestseller Returns Flow',
      async ({ page }) => {
        await new TestCase17Page(page).execute();
      }
    );

    test(
      'TC18 - 12 Plus Years Drone Flow',
      async ({ page }) => {
        await new TestCase18Page(page).execute();
      }
    );

    test(
      'TC19 - Avengers Search Flow',
      async ({ page }) => {
        await new TestCase19Page(page).execute();
      }
    );

    test(
      'TC20 - Peppa Pig Checkout Flow',
      async ({ page }) => {
        await new TestCase20Page(page).execute();
      }
    );
  }
);