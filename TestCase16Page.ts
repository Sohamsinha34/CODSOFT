import { Page, expect, Locator } from '@playwright/test';
import Logger from '../utils/Logger';
import { Keywords } from '../utils/keywords';
import { TestCase16Locators } from '../uistore/TestCase16Locators';

export class TestCase16Page {
   private readonly keywords: Keywords;

   constructor(
      private readonly page: Page
   ) {
      this.keywords = new Keywords(page);
   }

   /**
    * Author Name : Abesh Bhattacharya
    * Method Name : execute
    * Description : Executes Under 2500 product journey and validates checkout flow
    * Parameters : None
    * Return Type : Promise<void>
    */
   public async execute(): Promise<void> {
      try {
         Logger.info(
            'Starting Test Case 16 execution'
         );

         Logger.info(
            'Navigating to Under 2500 collection page'
         );

         await this.page.goto(
            '/collection/under-2500'
         );

         const productText: Locator =
            TestCase16Locators.productText(
               this.page
            );

         if (
            await productText.count() > 0
         ) {
            Logger.info(
               'Verifying products text'
            );

            await expect(
               productText
            ).toBeVisible();

            Logger.info(
               'Products text verified successfully'
            );
         }

         Logger.info(
            'Opening first available product'
         );

         await this.keywords.openFirstProduct();

         Logger.info(
            'Verifying product image'
         );

         await this.keywords.verifyProductImage();

         Logger.info(
            'Verifying specifications section'
         );

         await this.keywords.verifySpecifications();

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
            'Verifying bag page URL'
         );

         await expect(this.page).toHaveURL(
            /bag/i
         );

         Logger.info(
            'Proceeding to checkout'
         );

         await this.keywords.checkout();

         Logger.info(
            'Test Case 16 executed successfully'
         );
      }
      catch (error) {
         Logger.error(
            `Failed to execute Test Case 16 : ${error}`
         );

         throw error;
      }
   }
}