import {
   Locator,
   Page
} from '@playwright/test';

export class TestCase07Locators {
   static readonly princessTitle = (
      page: Page
   ): Locator =>
      page
         .getByText(
            'Princess',
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

   static readonly disneyDescription = (
      page: Page
   ): Locator =>
      page
         .getByText(
            'Disney',
            {
               exact: false
            }
         )
         .filter({
            visible: true
         })
         .first();

   static readonly addToBagButton = (
      page: Page
   ): Locator =>
      page
         .getByText(
            'Add to bag',
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