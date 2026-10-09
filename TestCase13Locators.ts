import { Locator, Page } from '@playwright/test';

export class TestCase13Locators {
   static readonly under500CollectionPage = (
      page: Page
   ): Locator =>
      page.getByRole(
         'main'
      );
}