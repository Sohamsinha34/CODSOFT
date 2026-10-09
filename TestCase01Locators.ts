import {
   Page,
   Locator
} from '@playwright/test';

export class TestCase01Locators {
   static readonly barbieTitle = (
      page: Page
   ): Locator =>
      page
         .getByText(
            'Barbie',
            {
               exact: false
            }
         )
         .filter({
            visible: true
         })
         .first();
}