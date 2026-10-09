import {
   Page,
   expect,
   Locator
} from '@playwright/test';

import Logger from '../utils/Logger';
import { Keywords } from '../utils/keywords';
import { TestCase04Locators } from '../uistore/TestCase04Locators';

export class TestCase04Page {
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
    * Description : Executes Peppa Pig product journey and validates product information
    * Parameters : None
    * Return Type : Promise<void>
    */
   public async execute(): Promise<void> {
      try {
         Logger.info(
            'Starting Test Case 04 execution'
         );

         Logger.info(
            'Navigating to Peppa Pig collection page'
         );

         await this.page.goto(
            '/collection/peppa-pig'
         );

         await expect(
            this.page
         ).toHaveURL(
            /peppa-pig/i
         );

         Logger.info(
            'Peppa Pig collection page verified successfully'
         );

         Logger.info(
            'Opening first available product'
         );

         await this.keywords.openFirstProduct();

         const title: Locator =
            TestCase04Locators.peppaTitle(
               this.page
            );

         Logger.info(
            'Verifying Peppa product title'
         );

         await expect(
            title
         ).toBeVisible();

         Logger.info(
            'Peppa product title verified successfully'
         );

         Logger.info(
            'Opening Product Details section'
         );

         await this.keywords.openProductDetails();

         const age: Locator =
            TestCase04Locators.ageText(
               this.page
            );

         if (
            await age.count() > 0
         ) {
            Logger.info(
               'Verifying Age information'
            );

            await expect(
               age
            ).toBeVisible();

            Logger.info(
               'Age information verified successfully'
            );
         }

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
            'Test Case 04 executed successfully'
         );
      }
      catch (error) {
         Logger.error(
            `Failed to execute Test Case 04 : ${error}`
         );

         throw error;
      }
   }
}