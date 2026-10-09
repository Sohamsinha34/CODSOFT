import { Locator, Page } from '@playwright/test';

export class TestCase14Locators {
   static readonly under1000CollectionPage = (
      page: Page
   ): Locator =>
      page.getByRole(
         'main'
      );
}