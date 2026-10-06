import { Page, expect } from '@playwright/test';

export class TestCase05Page {
  constructor(private page: Page) {}

  async execute() {
    // Step 1: Launch Hamleys website
    await this.page.goto('/');

    // Step 2: Open Outdoor Toys
    await this.page.goto(
      '/collection/sports--outdoor'
    );

    await this.page.waitForLoadState(
      'domcontentloaded'
    );

    // Step 3: Verify Outdoor Toys page
    await expect(
      this.page
    ).toHaveURL(/sports--outdoor/i);

    // Step 4: Find Sort By
    const sortBy = this.page
      .getByText(/Sort By/i)
      .filter({
        visible: true
      })
      .first();

    if (await sortBy.count() > 0) {
      await sortBy.hover();

      // Step 5: Select Discount
      const discount = this.page
        .getByText(
          'Discount',
          {
            exact: true
          }
        )
        .filter({
          visible: true
        })
        .first();

      if (await discount.count() > 0) {
        await discount.click();
      }
    }

    await this.page.waitForLoadState(
      'domcontentloaded'
    );

    // Step 6: Get available product links
    let products = this.page
      .getByRole('link')
      .filter({
        visible: true
      });

    let productCount =
      await products.count();

    expect(
      productCount
    ).toBeGreaterThan(0);

    // Step 7: Remember listing URL
    const listingUrl =
      this.page.url();

    // Step 8:
    // Prefer 10th product when available
    if (productCount >= 10) {
      await products.nth(9).click();
    } else {
      // Otherwise use a visible product
      const productWithPrice =
        this.page
          .getByText(/₹/)
          .filter({
            visible: true
          })
          .first();

      if (
        await productWithPrice.count() > 0
      ) {
        await productWithPrice.click();
      }
    }

    await this.page.waitForLoadState(
      'domcontentloaded'
    );

    // Step 9:
    // If a generic link was clicked but
    // did not open a product, select product
    // text containing a price.
    if (
      this.page.url() === listingUrl
    ) {
      const priceProduct = this.page
        .getByText(/₹/)
        .filter({
          visible: true
        })
        .first();

      if (
        await priceProduct.count() > 0
      ) {
        await priceProduct.click();

        await this.page.waitForLoadState(
          'domcontentloaded'
        );
      }
    }

    // Step 10: Verify URL changed
    expect(
      this.page.url()
    ).not.toBe(listingUrl);

    // Step 11: Find Specifications
    const specifications = this.page
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

    if (
      await specifications.count() > 0
    ) {
      await specifications
        .scrollIntoViewIfNeeded();

      await expect(
        specifications
      ).toBeVisible();

      await specifications.click();
    }

    // Step 12: Find Add to bag
    const addToBag = this.page
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

    if (
      await addToBag.count() > 0
    ) {
      await addToBag.click();
    }

    // Step 13: Find Buy now
    const buyNow = this.page
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

    if (
      await buyNow.count() > 0
    ) {
      await buyNow.click();

      await expect(
        this.page
      ).toHaveURL(/bag|checkout/i);
    }

    // Step 14: Checkout if available
    const checkout = this.page
      .getByText(/Checkout/i)
      .filter({
        visible: true
      })
      .first();

    if (
      await checkout.count() > 0
    ) {
      await checkout.click();
    }
  }
}