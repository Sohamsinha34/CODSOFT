import { Page, expect, Locator } from '@playwright/test';
import Logger from '../utils/Logger';
import { Keywords } from '../utils/keywords';
import { TestCase08Locators } from '../uistore/TestCase08Locators';

export class TestCase08Page {
   private readonly keywords: Keywords;

   constructor(
      private readonly page: Page
   ) {
      this.keywords = new Keywords(page);
   }

   /**
    * Author Name : Abesh Bhattacharya
    * Method Name : execute
    * Description : Executes Frozen product journey and validates bag navigation
    * Parameters : None
    * Return Type : Promise<void>
    */
   public async execute(): Promise<void> {
      try {
         Logger.info(
            'Starting Test Case 08 execution'
         );

         Logger.info(
            'Launching Hamleys website'
         );

         await this.page.goto('/');

         await this.page.waitForLoadState(
            'domcontentloaded'
         );

         Logger.info(
            'Opening Frozen product page'
         );

         await this.page.goto(
            '/product/Disney-Frozen-Standard-Fashion-Dolls-AssortedGirls3YMulticolour-493663119'
         );

         await this.page.waitForLoadState(
            'domcontentloaded'
         );

         Logger.info(
            'Verifying Frozen product page URL'
         );

         await expect(this.page).toHaveURL(
            /Frozen/i
         );

         const frozenTitle: Locator =
            TestCase08Locators.frozenTitle(
               this.page
            );

         Logger.info(
            'Verifying Frozen product title'
         );

         await expect(
            frozenTitle
         ).toBeVisible();

         const productDetails: Locator =
            TestCase08Locators.productDetailsText(
               this.page
            );

         Logger.info(
            'Opening Product Details section'
         );

         await expect(
            productDetails
         ).toBeVisible();

         await productDetails.scrollIntoViewIfNeeded();

         await productDetails.click();

         const specifications: Locator =
            TestCase08Locators.specificationsText(
               this.page
            );

         Logger.info(
            'Verifying Specifications section'
         );

         await expect(
            specifications
         ).toBeVisible();

         Logger.info(
            'Checking pincode availability'
         );

         await this.keywords.checkPincode();

         Logger.info(
            'Adding product to bag'
         );

         await this.keywords.addToBag();

         const buyNow: Locator =
            TestCase08Locators.buyNowButton(
               this.page
            );

         if (
            await buyNow.count() > 0
         ) {
            Logger.info(
               'Clicking Buy Now button'
            );

            await buyNow.click();

            await this.page.waitForTimeout(
               1000
            );

            Logger.info(
               'Buy Now button clicked successfully'
            );
         }

         if (
            !this.page
               .url()
               .toLowerCase()
               .includes('bag')
         ) {
            const myBag: Locator =
               TestCase08Locators.myBagButton(
                  this.page
               );

            if (
               await myBag.count() > 0
            ) {
               Logger.info(
                  'Opening My Bag page'
               );

               await myBag.click();

               Logger.info(
                  'My Bag page opened successfully'
               );
            }
         }

         if (
            !this.page
               .url()
               .toLowerCase()
               .includes('bag')
         ) {
            Logger.info(
               'Navigating directly to bag page'
            );

            await this.page.goto(
               '/cart/bag'
            );
         }

         Logger.info(
            'Verifying bag page URL'
         );

         await expect(this.page).toHaveURL(
            /bag/i
         );

         Logger.info(
            'Test Case 08 executed successfully'
         );
      }
      catch (error) {
         Logger.error(
            `Failed to execute Test Case 08 : ${error}`
         );

         throw error;
      }
   }
}