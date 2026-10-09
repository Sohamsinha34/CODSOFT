import {
   Locator,
   Page
} from '@playwright/test';

export class TestCase04Locators {
   static readonly peppaTitle = (
      page: Page
   ): Locator =>
      page
         .getByText(
            'Peppa',
            {
               exact: false
            }
         )
         .filter({
            visible: true
         })
         .first();

   static readonly ageText = (
      page: Page
   ): Locator =>
      page
         .getByText(
            'Age',
            {
               exact: false
            }
         )
         .filter({
            visible: true
         })
         .first();
}