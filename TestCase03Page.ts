import {
   Page,
   expect,
   Locator
} from '@playwright/test';

import Logger from '../utils/Logger';

import {
   Keywords
} from '../utils/keywords';

import {
   TestCase03Locators
} from '../uistore/TestCase03Locators';

export class TestCase03Page {
   private readonly keywords: Keywords;

   constructor(
      private readonly page: Page
   ) {
      this.keywords = new Keywords(
         page
      );
   }

   /**
    * Author Name : Abesh Bhattacharya
    * Method Name : execute
    * Description : Executes Spider-Man product purchase flow and validates navigation
    * Parameters : None
    * Return Type : Promise<void>
    */
   public async execute(): Promise<void> {
      try {
         Logger.info(
            'Starting Test Case 03 execution'
         );

         Logger.info(
            'Navigating to Spider-Man collection page'
         );

         await this.page.goto(
            '/collection/spiderman'
         );

         await this.page.waitForLoadState(
            'domcontentloaded'
         );

         Logger.info(
            'Verifying Spider-Man collection URL'
         );

         await expect(
            this.page
         ).toHaveURL(
            /spiderman/i
         );

         Logger.info(
            'Spider-Man collection URL verified successfully'
         );

         Logger.info(
            'Opening first available product'
         );

         await this.keywords.openFirstProduct();

         await this.page.waitForLoadState(
            'domcontentloaded'
         );

         const spiderTitle: Locator =
            TestCase03Locators.spiderTitle(
               this.page
            );

         Logger.info(
            'Verifying Spider product title'
         );

         await expect(
            spiderTitle
         ).toBeVisible();

         Logger.info(
            'Spider product title verified successfully'
         );

         Logger.info(
            'Opening Product Details section'
         );

         await this.keywords.openProductDetails();

         Logger.info(
            'Checking pincode availability'
         );

         await this.keywords.checkPincode();

         Logger.info(
            'Adding product to bag'
         );

         await this.keywords.addToBag();

         const buyNow: Locator =
            TestCase03Locators.buyNowButton(
               this.page
            );

         if (
            await buyNow.count() > 0
         ) {
            Logger.info(
               'Clicking Buy Now button'
            );

            await buyNow.click();

            await this.page.waitForTimeout(
               1000
            );

            Logger.info(
               'Buy Now button clicked successfully'
            );
         }

         if (
            !this.page
               .url()
               .toLowerCase()
               .includes(
                  'bag'
               )
         ) {
            const myBag: Locator =
               TestCase03Locators.myBagButton(
                  this.page
               );

            if (
               await myBag.count() > 0
            ) {
               Logger.info(
                  'Opening My Bag page'
               );

               await myBag.click();

               Logger.info(
                  'My Bag page opened successfully'
               );
            }
         }

         Logger.info(
            'Verifying navigation to Bag or Checkout page'
         );

         await expect(
            this.page
         ).toHaveURL(
            /bag|checkout/i
         );

         Logger.info(
            'Test Case 03 executed successfully'
         );
      }
      catch (error) {
         Logger.error(
            `Failed to execute Test Case 03 : ${error}`
         );

         throw error;
      }
   }
}