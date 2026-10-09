import {
   Locator,
   Page
} from '@playwright/test';

export class TestCase03Locators {
   static readonly spiderTitle = (
      page: Page
   ): Locator =>
      page
         .getByText(
            'Spider',
            {
               exact: false
            }
         )
         .filter({
            visible: true
         })
         .first();

   static readonly buyNowButton = (
      page: Page
   ): Locator =>
      page
         .getByText(
            'Buy now',
            {
               exact: true
            }
         )
         .filter({
            visible: true
         })
         .first();

   static readonly myBagButton = (
      page: Page
   ): Locator =>
      page
         .getByText(
            'My bag',
            {
               exact: true
            }
         )
         .filter({
            visible: true
         })
         .first();
}