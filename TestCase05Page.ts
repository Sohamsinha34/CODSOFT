import { Page, expect, Locator } from '@playwright/test';
import Logger from '../utils/Logger';
import { Keywords } from '../utils/keywords';
import { TestCase05Locators } from '../uistore/TestCase05Locators';

export class TestCase05Page {
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
    * Description : Executes Harry Potter product journey and validates bag navigation
    * Parameters : None
    * Return Type : Promise<void>
    */
   public async execute(): Promise<void> {
      try {
         Logger.info(
            'Starting Test Case 05 execution'
         );

         Logger.info(
            'Launching Hamleys website'
         );

         await this.page.goto(
            '/'
         );

         await this.page.waitForLoadState(
            'domcontentloaded'
         );

         Logger.info(
            'Opening Harry Potter product page'
         );

         await this.page.goto(
            '/product/hamleys-harry-potter-slytherin-bear-soft-toy-for-kids-3y-grey-12832664'
         );

         await this.page.waitForLoadState(
            'domcontentloaded'
         );

         Logger.info(
            'Verifying Harry Potter page URL'
         );

         await expect(
            this.page
         ).toHaveURL(
            /harry-potter/i
         );

         const title: Locator =
            TestCase05Locators.harryPotterTitle(
               this.page
            );

         Logger.info(
            'Verifying product title'
         );

         await expect(
            title
         ).toBeVisible();

         const productDetails: Locator =
            TestCase05Locators.productDetailsText(
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
            TestCase05Locators.specificationsText(
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
            TestCase05Locators.buyNowButton(
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
               .includes(
                  'bag'
               )
         ) {
            const myBag: Locator =
               TestCase05Locators.myBagButton(
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
               .includes(
                  'bag'
               )
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

         await expect(
            this.page
         ).toHaveURL(
            /bag/i
         );

         Logger.info(
            'Test Case 05 executed successfully'
         );
      }
      catch (error) {
         Logger.error(
            `Failed to execute Test Case 05 : ${error}`
         );

         throw error;
      }
   }
}