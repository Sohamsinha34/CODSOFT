import {
   Locator,
   Page
} from '@playwright/test';

export class TestCase02Locators {
   static readonly mickeyCollectionPage = (
      page: Page
   ): Locator =>
      page.getByRole(
         'main'
      );
}