import { Page, expect } from '@playwright/test';
import Logger from '../utils/Logger';
import { Keywords } from '../utils/keywords';

export class TestCase13Page {
   private readonly keywords: Keywords;

   constructor(
      private readonly page: Page
   ) {
      this.keywords = new Keywords(page);
   }

   /**
    * Author Name : Abesh Bhattacharya
    * Method Name : execute
    * Description : Executes Under 500 product journey and validates bag navigation
    * Parameters : None
    * Return Type : Promise<void>
    */
   public async execute(): Promise<void> {
      try {
         Logger.info(
            'Starting Test Case 13 execution'
         );

         Logger.info(
            'Navigating to Under 500 collection page'
         );

         await this.page.goto(
            '/collection/under-500'
         );

         await expect(this.page).toHaveURL(
            /500/i
         );

         Logger.info(
            'Under 500 collection page verified successfully'
         );

         Logger.info(
            'Opening first available product'
         );

         await this.keywords.openFirstProduct();

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
            'Test Case 13 executed successfully'
         );
      }
      catch (error) {
         Logger.error(
            `Failed to execute Test Case 13 : ${error}`
         );

         throw error;
      }
   }
}