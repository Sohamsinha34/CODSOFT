import { Page, expect } from '@playwright/test';
import Logger from '../utils/Logger';
import { Keywords } from '../utils/keywords';

export class TestCase02Page {
   private readonly keywords: Keywords;

   constructor(
      private readonly page: Page
   ) {
      this.keywords = new Keywords(page);
   }

   /**
    * Author Name : Abesh Bhattacharya
    * Method Name : execute
    * Description : Executes Mickey and Minnie product purchase flow
    * Parameters : None
    * Return Type : Promise<void>
    */
   public async execute(): Promise<void> {
      try {
         Logger.info(
            'Starting Test Case 02 execution'
         );

         Logger.info(
            'Navigating to Mickey and Minnie collection page'
         );

         await this.page.goto(
            '/products?character=mickey-and-minnie'
         );

         await this.page.waitForLoadState(
            'domcontentloaded'
         );

         await expect(
            this.page
         ).toHaveURL(
            /mickey|minnie/i
         );

         Logger.info(
            'Mickey and Minnie collection page verified successfully'
         );

         Logger.info(
            'Opening first available product'
         );

         await this.keywords.openFirstProduct();

         Logger.info(
            'Verifying product image'
         );

         await this.keywords.verifyProductImage();

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
            'Test Case 02 executed successfully'
         );
      }
      catch (error) {
         Logger.error(
            `Failed to execute Test Case 02 : ${error}`
         );

         throw error;
      }
   }
}