import { Locator, Page } from '@playwright/test';

export class TestCase20Locators {
   static readonly emailTextboxes = (
      page: Page
   ): Locator =>
      page
         .getByRole(
            'textbox'
         )
         .filter({
            visible: true
         });

   static readonly productDetailsText = (
      page: Page
   ): Locator =>
      page
         .getByText(
            'Product Details',
            {
               exact: true
            }
         )
         .filter({
            visible: true
         })
         .first();
}
