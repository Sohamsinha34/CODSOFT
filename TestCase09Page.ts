import { Page, expect, Locator } from '@playwright/test';
import Logger from '../utils/Logger';
import { Keywords } from '../utils/keywords';
import { TestCase09Locators } from '../uistore/TestCase09Locators';

export class TestCase09Page {
   private readonly keywords: Keywords;

   constructor(
      private readonly page: Page
   ) {
      this.keywords = new Keywords(page);
   }

   /**
    * Author Name : Abesh Bhattacharya
    * Method Name : execute
    * Description : Executes Masha And The Bear product journey
    * Parameters : None
    * Return Type : Promise<void>
    */
   public async execute(): Promise<void> {
      try {
         Logger.info(
            'Starting Test Case 09 execution'
         );

         Logger.info(
            'Navigating to Masha And The Bear collection page'
         );

         await this.page.goto(
            '/products?character=masha-and-the-bear'
         );

         await expect(this.page).toHaveURL(
            /masha/i
         );

         Logger.info(
            'Masha And The Bear collection page verified successfully'
         );

         Logger.info(
            'Opening first available product'
         );

         await this.keywords.openFirstProduct();

         Logger.info(
            'Verifying product image'
         );

         await this.keywords.verifyProductImage();

         const heading: Locator =
            TestCase09Locators.firstVisibleHeading(
               this.page
            );

         if (
            await heading.count() > 0
         ) {
            Logger.info(
               'Verifying product heading'
            );

            await expect(
               heading
            ).toBeVisible();

            Logger.info(
               'Product heading verified successfully'
            );
         }

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
            'Test Case 09 executed successfully'
         );
      }
      catch (error) {
         Logger.error(
            `Failed to execute Test Case 09 : ${error}`
         );

         throw error;
      }
   }
}