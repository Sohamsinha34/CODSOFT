import { Page, expect, Locator } from '@playwright/test';
import Logger from '../utils/Logger';
import { Keywords } from '../utils/keywords';
import { TestCase18Locators } from '../uistore/TestCase18Locators';

export class TestCase18Page {
   private readonly keywords: Keywords;

   constructor(
      private readonly page: Page
   ) {
      this.keywords = new Keywords(page);
   }

   /**
    * Author Name : Abesh Bhattacharya
    * Method Name : execute
    * Description : Executes sorting, add to bag and buy now flow validation
    * Parameters : None
    * Return Type : Promise<void>
    */
   public async execute(): Promise<void> {
      try {
         Logger.info(
            'Starting Test Case 18 execution'
         );

         await this.page.goto(
            '/collection/under-1000'
         );

         await this.page.waitForLoadState(
            'domcontentloaded'
         );

         const productsBeforeSort: Locator =
            TestCase18Locators.productsText(
               this.page
            );

         if (
            await productsBeforeSort.count() > 0
         ) {
            await expect(
               productsBeforeSort
            ).toBeVisible();
         }

         const sortBy: Locator =
            TestCase18Locators.sortByText(
               this.page
            );

         if (
            await sortBy.count() > 0
         ) {
            await sortBy.hover();

            const lowToHigh: Locator =
               TestCase18Locators.lowToHighOption(
                  this.page
               );

            if (
               await lowToHigh.count() > 0
            ) {
               await lowToHigh.click();
            }
         }

         await this.page.waitForLoadState(
            'domcontentloaded'
         );

         await this.keywords.openFirstProduct();

         await this.keywords.verifyPrice();

         await this.keywords.addToBag();

         const productUrl: string =
            this.page.url();

         const myBag: Locator =
            TestCase18Locators.myBagButton(
               this.page
            );

         if (
            await myBag.count() > 0
         ) {
            await myBag.click();
         }
         else {
            await this.page.goto(
               '/cart/bag'
            );
         }

         await this.page.waitForLoadState(
            'domcontentloaded'
         );

         await expect(
            this.page
         ).toHaveURL(
            /bag/i
         );

         await this.page.goto(
            productUrl
         );

         await this.page.waitForLoadState(
            'domcontentloaded'
         );

         const buyNow: Locator =
            TestCase18Locators.buyNowButton(
               this.page
            );

         if (
            await buyNow.count() > 0
         ) {
            await buyNow.click();

            await this.page.waitForTimeout(
               1000
            );
         }

         if (
            !this.page
               .url()
               .toLowerCase()
               .includes(
                  'bag'
               )
         ) {
            await this.page.goto(
               '/cart/bag'
            );
         }

         await expect(
            this.page
         ).toHaveURL(
            /bag/i
         );

         Logger.info(
            'Test Case 18 executed successfully'
         );
      }
      catch (error) {
         Logger.error(
            `Failed to execute Test Case 18 : ${error}`
         );

         throw error;
      }
   }
}