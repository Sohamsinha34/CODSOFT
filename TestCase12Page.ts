import { Page, expect } from '@playwright/test';
import Logger from '../utils/Logger';
import { Keywords } from '../utils/keywords';

export class TestCase12Page {
   private readonly keywords: Keywords;

   constructor(
      private readonly page: Page
   ) {
      this.keywords = new Keywords(page);
   }

   /**
    * Author Name : Abesh Bhattacharya
    * Method Name : execute
    * Description : Executes Best Friends Forever product journey and validates bag navigation
    * Parameters : None
    * Return Type : Promise<void>
    */
   public async execute(): Promise<void> {
      try {
         Logger.info(
            'Starting Test Case 12 execution'
         );

         Logger.info(
            'Navigating to Best Friends Forever brand page'
         );

         await this.page.goto(
            '/brand/Best%20Friends%20Forever'
         );

         await expect(this.page).toHaveURL(
            /Best/i
         );

         Logger.info(
            'Best Friends Forever brand page verified successfully'
         );

         Logger.info(
            'Opening Best Friends Forever product page'
         );

         await this.page.goto(
            '/product/best-friends-forever-series-3-shannon-fashion-play-doll-3y-11850892'
         );

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
            'Test Case 12 executed successfully'
         );
      }
      catch (error) {
         Logger.error(
            `Failed to execute Test Case 12 : ${error}`
         );

         throw error;
      }
   }
}