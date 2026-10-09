import {
   Locator,
   Page
} from '@playwright/test';

export class TestCase06Locators {
   static readonly avengersCollectionPage = (
      page: Page
   ): Locator =>
      page.getByRole(
         'main'
      );
}