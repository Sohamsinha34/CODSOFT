import { Locator, Page } from '@playwright/test';

export class TestCase16Locators {
   static readonly productText = (
      page: Page
   ): Locator =>
      page
         .getByText(
            'products',
            {
               exact: false
            }
         )
         .filter({
            visible: true
         })
         .first();
}