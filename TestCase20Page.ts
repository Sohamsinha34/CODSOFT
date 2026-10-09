import { Page, expect, Locator } from '@playwright/test';
import Logger from '../utils/Logger';
import { Keywords } from '../utils/keywords';
import { takeScreenshot } from '../utils/Screenshot';
import { TestCase20Locators } from '../uistore/TestCase20Locators';

export class TestCase20Page {
   private readonly keywords: Keywords;

   constructor(
      private readonly page: Page
   ) {
      this.keywords = new Keywords(page);
   }

   /**
    * Author Name : Abesh Bhattacharya
    * Method Name : execute
    * Description : Executes product page validation, newsletter input verification and screenshot capture flow
    * Parameters : None
    * Return Type : Promise<void>
    */
   public async execute(): Promise<void> {
      try {
         Logger.info(
            'Starting Test Case 20 execution'
         );

         await this.page.goto(
            '/collection/under-500'
         );

         Logger.info(
            'Opening first available product'
         );

         await this.keywords.openFirstProduct();

         await expect(this.page).toHaveURL(
            /product/i
         );

         Logger.info(
            'Scrolling to bottom of page'
         );

         await this.keywords.scrollToBottom();

         const emailBoxes: Locator =
            TestCase20Locators.emailTextboxes(
               this.page
            );

         const emailCount: number =
            await emailBoxes.count();

         if (
            emailCount > 0
         ) {
            const email: Locator =
               emailBoxes.last();

            await email.fill(
               'testmail@gmail.com'
            );

            await expect(email).toHaveValue(
               'testmail@gmail.com'
            );
         }

         await this.page.evaluate(
            () => {
               window.scrollTo(
                  0,
                  0
               );
            }
         );

         Logger.info(
            'Opening Product Details section'
         );

         await this.keywords.openProductDetails();

         const details: Locator =
            TestCase20Locators.productDetailsText(
               this.page
            );

         if (
            await details.count() > 0
         ) {
            await expect(
               details
            ).toBeVisible();
         }

         Logger.info(
            'Capturing product page screenshot'
         );

         await takeScreenshot(
            this.page,
            'TC20_Full_Product_Page'
         );

         Logger.info(
            'Refreshing product page'
         );

         await this.page.reload();

         await expect(this.page).toHaveURL(
            /product/i
         );

         Logger.info(
            'Test Case 20 executed successfully'
         );
      }
      catch (error) {
         Logger.error(
            `Failed to execute Test Case 20 : ${error}`
         );

         throw error;
      }
   }
}