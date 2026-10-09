import { Locator, Page } from '@playwright/test';

export class TestCase09Locators {
   static readonly firstVisibleHeading = (
      page: Page
   ): Locator =>
      page
         .getByRole(
            'heading'
         )
         .filter({
            visible: true
         })
         .first();
}