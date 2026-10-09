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

/**
 * Author Name : Abesh Bhattacharya
 * Method Name : beforeEach
 * Description : Logs test execution start
 */
test.beforeEach(
   async (
      {},
      testInfo
   ) => {
      Logger.info(
         `STARTED : ${testInfo.title}`
      );
   }
);

/**
 * Author Name : Abesh Bhattacharya
 * Method Name : afterEach
 * Description : Logs test result and captures screenshot on failure
 */
test.afterEach(
   async (
      { page },
      testInfo
   ) => {
      if (
         testInfo.status ===
         testInfo.expectedStatus
      ) {
         Logger.info(
            `PASSED : ${testInfo.title}`
         );
      }
      else {
         Logger.error(
            `FAILED : ${testInfo.title}`
         );

         await takeScreenshot(
            page,
            testInfo.title
         );
      }
   }
);

test.describe(
   'Hamleys Characters and Budget Test Cases',
   () => {
      test(
         'TC01 - Barbie Product Purchase Flow',
         async ({ page }) => {
            await new TestCase01Page(
               page
            ).execute();
         }
      );

      test(
         'TC02 - Mickey and Minnie Product Flow',
         async ({ page }) => {
            await new TestCase02Page(
               page
            ).execute();
         }
      );

      test(
         'TC03 - Spiderman Product Flow',
         async ({ page }) => {
            await new TestCase03Page(
               page
            ).execute();
         }
      );

      test(
         'TC04 - Peppa Pig Product Flow',
         async ({ page }) => {
            await new TestCase04Page(
               page
            ).execute();
         }
      );

      test(
         'TC05 - Harry Potter Product Flow',
         async ({ page }) => {
            await new TestCase05Page(
               page
            ).execute();
         }
      );

      test(
         'TC06 - Avengers Product Flow',
         async ({ page }) => {
            await new TestCase06Page(
               page
            ).execute();
         }
      );

      test(
         'TC07 - Disney Princess Product Flow',
         async ({ page }) => {
            await new TestCase07Page(
               page
            ).execute();
         }
      );

      test(
         'TC08 - Frozen Product Flow',
         async ({ page }) => {
            await new TestCase08Page(
               page
            ).execute();
         }
      );

      test(
         'TC09 - Masha and The Bear Product Flow',
         async ({ page }) => {
            await new TestCase09Page(
               page
            ).execute();
         }
      );

      test(
         'TC10 - Paw Patrol Product Flow',
         async ({ page }) => {
            await new TestCase10Page(
               page
            ).execute();
         }
      );

      test(
         'TC11 - Pokemon Product Flow',
         async ({ page }) => {
            await new TestCase11Page(
               page
            ).execute();
         }
      );

      test(
         'TC12 - Best Friends Forever Product Flow',
         async ({ page }) => {
            await new TestCase12Page(
               page
            ).execute();
         }
      );

      test(
         'TC13 - Under 500 Budget Flow',
         async ({ page }) => {
            await new TestCase13Page(
               page
            ).execute();
         }
      );

      test(
         'TC14 - Under 1000 Budget Flow',
         async ({ page }) => {
            await new TestCase14Page(
               page
            ).execute();
         }
      );

      test(
         'TC15 - Under 1500 Budget Flow',
         async ({ page }) => {
            await new TestCase15Page(
               page
            ).execute();
         }
      );

      test(
         'TC16 - Under 2500 Budget Flow',
         async ({ page }) => {
            await new TestCase16Page(
               page
            ).execute();
         }
      );

      test(
         'TC17 - Premium Gifts Product Flow',
         async ({ page }) => {
            await new TestCase17Page(
               page
            ).execute();
         }
      );

      test(
         'TC18 - Budget Page Sort Functionality',
         async ({ page }) => {
            await new TestCase18Page(
               page
            ).execute();
         }
      );

      test(
         'TC19 - Character Product Pincode Flow',
         async ({ page }) => {
            await new TestCase19Page(
               page
            ).execute();
         }
      );

      test(
         'TC20 - Newsletter Subscription From Budget Product',
         async ({ page }) => {
            await new TestCase20Page(
               page
            ).execute();
         }
      );
   }
);