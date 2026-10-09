import { Locator, Page } from '@playwright/test';

export class TestCase11Locators {
   static readonly pokemonTitle = (
      page: Page
   ): Locator =>
      page
         .getByText(
            'Pokemon',
            {
               exact: false
            }
         )
         .filter({
            visible: true
         })
         .first();
}