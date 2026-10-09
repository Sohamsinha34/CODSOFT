import { Page, expect, Locator } from '@playwright/test';
import Logger from '../utils/Logger';
import { Keywords } from '../utils/keywords';
import { TestCase15Locators } from '../uistore/TestCase15Locators';

export class TestCase15Page {
   private readonly keywords: Keywords;

   constructor(
      private readonly page: Page
   ) {
      this.keywords = new Keywords(page);
   }

   /**
    * Author Name : Abesh Bhattacharya
    * Method Name : execute
    * Description : Executes Under 1500 product journey and validates checkout flow
    * Parameters : None
    * Return Type : Promise<void>
    */
   public async execute(): Promise<void> {
      try {
         Logger.info(
            'Starting Test Case 15 execution'
         );

         Logger.info(
            'Navigating to Under 1500 collection page'
         );

         await this.page.goto(
            '/collection/under-1500'
         );

         await expect(this.page).toHaveURL(
            /1500/i
         );

         Logger.info(
            'Under 1500 collection page verified successfully'
         );

         Logger.info(
            'Opening first available product'
         );

         await this.keywords.openFirstProduct();

         const heading: Locator =
            TestCase15Locators.firstVisibleHeading(
               this.page
            );

         if (
            await heading.count() > 0
         ) {
            Logger.info(
               'Verifying product heading'
            );

            await expect(heading).toBeVisible();

            Logger.info(
               'Product heading verified successfully'
            );
         }

         Logger.info(
            'Verifying product price'
         );

         await this.keywords.verifyPrice();

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
            'Opening shopping bag'
         );

         await this.keywords.openBag();

         Logger.info(
            'Proceeding to checkout'
         );

         await this.keywords.checkout();

         Logger.info(
            'Test Case 15 executed successfully'
         );
      }
      catch (error) {
         Logger.error(
            `Failed to execute Test Case 15 : ${error}`
         );

         throw error;
      }
   }
}