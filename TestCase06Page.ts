import { Page, expect } from '@playwright/test';
import Logger from '../utils/Logger';
import { Keywords } from '../utils/keywords';

export class TestCase06Page {
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
    * Description : Executes Avengers product journey and validates checkout flow
    * Parameters : None
    * Return Type : Promise<void>
    */
   public async execute(): Promise<void> {
      try {
         Logger.info(
            'Starting Test Case 06 execution'
         );

         Logger.info(
            'Navigating to Avengers collection page'
         );

         await this.page.goto(
            '/collection/avengers'
         );

         await expect(
            this.page
         ).toHaveURL(
            /avengers/i
         );

         Logger.info(
            'Avengers collection page verified successfully'
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
            'Test Case 06 executed successfully'
         );
      }
      catch (error) {
         Logger.error(
            `Failed to execute Test Case 06 : ${error}`
         );

         throw error;
      }
   }
}