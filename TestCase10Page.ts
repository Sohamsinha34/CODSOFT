import { Page, expect, Locator } from '@playwright/test';
import Logger from '../utils/Logger';
import { Keywords } from '../utils/keywords';
import { TestCase10Locators } from '../uistore/TestCase10Locators';

export class TestCase10Page {
   private readonly keywords: Keywords;

   constructor(
      private readonly page: Page
   ) {
      this.keywords = new Keywords(page);
   }

   /**
    * Author Name : Abesh Bhattacharya
    * Method Name : execute
    * Description : Executes Paw Patrol product journey and validates checkout navigation
    * Parameters : None
    * Return Type : Promise<void>
    */
   public async execute(): Promise<void> {
      try {
         Logger.info(
            'Starting Test Case 10 execution'
         );

         Logger.info(
            'Navigating to Paw Patrol collection page'
         );

         await this.page.goto(
            '/collection/paw-patrol'
         );

         await expect(this.page).toHaveURL(
            /paw-patrol/i
         );

         Logger.info(
            'Paw Patrol collection page verified successfully'
         );

         Logger.info(
            'Opening first available product'
         );

         await this.keywords.openFirstProduct();

         const title: Locator =
            TestCase10Locators.pawPatrolTitle(
               this.page
            );

         Logger.info(
            'Verifying Paw Patrol product title'
         );

         await expect(
            title
         ).toBeVisible();

         Logger.info(
            'Paw Patrol product title verified successfully'
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

         Logger.info(
            'Clicking Buy Now button'
         );

         await this.keywords.buyNow();

         Logger.info(
            'Verifying Bag or Checkout page'
         );

         await expect(this.page).toHaveURL(
            /bag|checkout/i
         );

         Logger.info(
            'Test Case 10 executed successfully'
         );
      }
      catch (error) {
         Logger.error(
            `Failed to execute Test Case 10 : ${error}`
         );

         throw error;
      }
   }
}