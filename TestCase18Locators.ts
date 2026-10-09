import { Locator, Page } from '@playwright/test';

export class TestCase18Locators {
   static readonly productsText = (
      page: Page
   ): Locator =>
      page
         .getByText(
            'products',
            {
               exact: false
            }
         )
         .filter({
            visible: true
         })
         .first();

   static readonly sortByText = (
      page: Page
   ): Locator =>
      page
         .getByText(
            'Sort By',
            {
               exact: false
            }
         )
         .filter({
            visible: true
         })
         .first();

   static readonly lowToHighOption = (
      page: Page
   ): Locator =>
      page
         .getByText(
            'Price Low to High',
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
}