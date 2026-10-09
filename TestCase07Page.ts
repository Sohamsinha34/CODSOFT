import { Page, expect, Locator } from '@playwright/test';
import Logger from '../utils/Logger';
import { Keywords } from '../utils/keywords';
import { TestCase07Locators } from '../uistore/TestCase07Locators';

export class TestCase07Page {
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
    * Description : Executes Disney Princess product journey and validates product details
    * Parameters : None
    * Return Type : Promise<void>
    */
   public async execute(): Promise<void> {
      try {
         Logger.info(
            'Starting Test Case 07 execution'
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
            'Opening Disney Princess product page'
         );

         await this.page.goto(
            '/product/princess-castle-16-backpack-491635826'
         );

         await this.page.waitForLoadState(
            'domcontentloaded'
         );

         Logger.info(
            'Verifying Princess product page URL'
         );

         await expect(
            this.page
         ).toHaveURL(
            /princess/i
         );

         const princessTitle: Locator =
            TestCase07Locators.princessTitle(
               this.page
            );

         Logger.info(
            'Verifying Princess product title'
         );

         await expect(
            princessTitle
         ).toBeVisible();

         const productDetails: Locator =
            TestCase07Locators.productDetailsText(
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

         const description: Locator =
            TestCase07Locators.disneyDescription(
               this.page
            );

         Logger.info(
            'Verifying Disney product description'
         );

         await expect(
            description
         ).toBeVisible();

         Logger.info(
            'Checking pincode availability'
         );

         await this.keywords.checkPincode();

         const addToBag: Locator =
            TestCase07Locators.addToBagButton(
               this.page
            );

         if (
            await addToBag.count() > 0
         ) {
            Logger.info(
               'Adding product to bag'
            );

            await addToBag.click();

            Logger.info(
               'Product added to bag successfully'
            );
         }

         const myBag: Locator =
            TestCase07Locators.myBagButton(
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

         const currentUrl: string =
            this.page.url();

         Logger.info(
            `Current URL : ${currentUrl}`
         );

         expect(
            currentUrl.length
         ).toBeGreaterThan(
            0
         );

         Logger.info(
            'Test Case 07 executed successfully'
         );
      }
      catch (error) {
         Logger.error(
            `Failed to execute Test Case 07 : ${error}`
         );

         throw error;
      }
   }
}