import {
   Locator,
   Page
} from '@playwright/test';

export class TestCase05Locators {
   static readonly harryPotterTitle = (
      page: Page
   ): Locator =>
      page
         .getByText(
            'Harry Potter',
            {
               exact: false
            }
         )
         .filter({
            visible: true
         })
         .first();

   static readonly productDetailsText = (
      page: Page
   ): Locator =>
      page
         .getByText(
            'Product Details',
            {
               exact: true
            }
         )
         .filter({
            visible: true
         })
         .first();

   static readonly specificationsText = (
      page: Page
   ): Locator =>
      page
         .getByText(
            'Specifications',
            {
               exact: true
            }
         )
         .filter({
            visible: true
         })
         .first();

   static readonly buyNowButton = (
      page: Page
   ): Locator =>
      page
         .getByText(
            'Buy now',
            {
               exact: true
            }
         )
         .filter({
            visible: true
         })
         .first();

   static readonly myBagButton = (
      page: Page
   ): Locator =>
      page
         .getByText(
            'My bag',
            {
               exact: true
            }
         )
         .filter({
            visible: true
         })
         .first();
}