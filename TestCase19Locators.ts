import { Locator, Page } from '@playwright/test';

export class TestCase19Locators {
   static readonly heading = (
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

   static readonly pincodeTextbox = (
      page: Page
   ): Locator =>
      page
         .getByPlaceholder(
            'pincode',
            {
               exact: false
            }
         )
         .filter({
            visible: true
         })
         .first();

   static readonly checkButton = (
      page: Page
   ): Locator =>
      page
         .getByText(
            'Check',
            {
               exact: true
            }
         )
         .filter({
            visible: true
         })
         .first();

   static readonly deliveryText = (
      page: Page
   ): Locator =>
      page
         .getByText(
            'Delivery',
            {
               exact: false
            }
         )
         .filter({
            visible: true
         })
         .first();

   static readonly visibleButtons = (
      page: Page
   ): Locator =>
      page
         .getByRole(
            'button'
         )
         .filter({
            visible: true
         });
}