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
   TestCase01Locators
} from '../uistore/TestCase01Locators';

export class TestCase01Page {
   private readonly keywords: Keywords;

   constructor(
      private readonly page: Page
   ) {
      this.keywords =
         new Keywords(
            page
         );
   }

   /**
    * Author Name : Abesh Bhattacharya
    * Method Name : execute
    * Description : Executes Barbie product journey and validates navigation flow
    * Parameters : None
    * Return Type : Promise<void>
    */
   public async execute(): Promise<void> {
      try {
         Logger.info(
            'Starting Test Case 01 execution'
         );

         Logger.info(
            'Opening Barbie character page'
         );

         await this.keywords.openCharacter(
            'Barbie'
         );

         Logger.info(
            'Verifying Barbie URL'
         );

         await expect(
            this.page
         ).toHaveURL(
            /barbie/i
         );

         Logger.info(
            'Barbie URL verified successfully'
         );

         Logger.info(
            'Opening first product'
         );

         await this.keywords.openFirstProduct();

         const title: Locator =
            TestCase01Locators.barbieTitle(
               this.page
            );

         Logger.info(
            'Verifying Barbie product title'
         );

         await expect(
            title
         ).toBeVisible();

         Logger.info(
            'Barbie product title verified successfully'
         );

         Logger.info(
            'Opening Product Details section'
         );

         await this.keywords.openProductDetails();

         Logger.info(
            'Checking pincode serviceability'
         );

         await this.keywords.checkPincode();

         Logger.info(
            'Adding product to bag'
         );

         await this.keywords.addToBag();

         Logger.info(
            'Clicking Buy Now'
         );

         await this.keywords.buyNow();

         Logger.info(
            'Verifying Bag or Checkout page'
         );

         await expect(
            this.page
         ).toHaveURL(
            /bag|checkout/i
         );

         Logger.info(
            'Test Case 01 executed successfully'
         );
      }
      catch (error) {
         Logger.error(
            `Failed to execute Test Case 01 : ${error}`
         );

         throw error;
      }
   }
}