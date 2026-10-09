import { Locator, Page } from '@playwright/test';

export class TestCase10Locators {
   static readonly pawPatrolTitle = (
      page: Page
   ): Locator =>
      page
         .getByText(
            'Paw Patrol',
            {
               exact: false
            }
         )
         .filter({
            visible: true
         })
         .first();
}