import { Locator, Page } from '@playwright/test';

export class TestCase12Locators {
   static readonly bestFriendsForeverProductImage = (
      page: Page
   ): Locator =>
      page
         .getByRole(
            'img'
         )
         .filter({
            visible: true
         })
         .first();
}