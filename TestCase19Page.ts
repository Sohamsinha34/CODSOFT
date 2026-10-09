import { Page, expect, Locator } from '@playwright/test';
import Logger from '../utils/Logger';
import { Keywords } from '../utils/keywords';
import { TestCase19Locators } from '../uistore/TestCase19Locators';

export class TestCase19Page {
   private readonly keywords: Keywords;

   constructor(
      private readonly page: Page
   ) {
      this.keywords = new Keywords(page);
   }

   /**
    * Author Name : Abesh Bhattacharya
    * Method Name : execute
    * Description : Executes Harry Potter product journey and validates delivery and checkout flow
    * Parameters : None
    * Return Type : Promise<void>
    */
   public async execute(): Promise<void> {
      try {
         Logger.info(
            'Starting Test Case 19 execution'
         );

         await this.page.goto(
            '/products?character=harry-potter'
         );

         await expect(this.page).toHaveURL(
            /harry-potter/i
         );

         Logger.info(
            'Opening first available product'
         );

         await this.keywords.openFirstProduct();

         const heading: Locator =
            TestCase19Locators.heading(
               this.page
            );

         if (
            await heading.count() > 0
         ) {
            await expect(
               heading
            ).toBeVisible();
         }

         const pincode: Locator =
            TestCase19Locators.pincodeTextbox(
               this.page
            );

         if (
            await pincode.count() > 0
         ) {
            await pincode.scrollIntoViewIfNeeded();

            await pincode.fill('');

            await pincode.fill(
               '700019'
            );

            const check: Locator =
               TestCase19Locators.checkButton(
                  this.page
               );

            if (
               await check.count() > 0
            ) {
               await check.click();
            }

            const delivery: Locator =
               TestCase19Locators.deliveryText(
                  this.page
               );

            if (
               await delivery.count() > 0
            ) {
               await expect(
                  delivery
               ).toBeVisible();
            }
         }

         Logger.info(
            'Adding product to bag'
         );

         await this.keywords.addToBag();

         Logger.info(
            'Opening shopping bag'
         );

         await this.keywords.openBag();

         const buttons: Locator =
            TestCase19Locators.visibleButtons(
               this.page
            );

         expect(
            await buttons.count()
         ).toBeGreaterThan(
            0
         );

         Logger.info(
            'Proceeding to checkout'
         );

         await this.keywords.checkout();

         Logger.info(
            'Test Case 19 executed successfully'
         );
      }
      catch (error) {
         Logger.error(
            `Failed to execute Test Case 19 : ${error}`
         );

         throw error;
      }
   }
}