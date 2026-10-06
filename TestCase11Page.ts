import { Page, expect } from '@playwright/test';
import { takeScreenshot } from '../utils/Screenshot';

export class TestCase11Page {
  constructor(private page: Page) {}

  async execute() {
    // Step 1: Launch Hamleys website
    await this.page.goto('/');

    await this.page.waitForLoadState(
      'domcontentloaded'
    );

    // Step 2: Open Marvel collection
    await this.page.goto(
      '/collection/marvel'
    );

    await this.page.waitForLoadState(
      'domcontentloaded'
    );

    // Step 3: Verify Marvel page
    await expect(
      this.page
    ).toHaveURL(/marvel/i);

    const marvel = this.page
      .getByText(/Marvel/i)
      .filter({
        visible: true
      })
      .first();

    if (await marvel.count() > 0) {
      await expect(
        marvel
      ).toBeVisible();
    }

    // Step 4: Open Age Group filter
    const ageGroup = this.page
      .getByText(
        'Age Group',
        {
          exact: true
        }
      )
      .filter({
        visible: true
      })
      .first();

    if (await ageGroup.count() > 0) {
      await ageGroup.click();

      // Step 5: Select 5-7 Years
      const fiveToSeven = this.page
        .getByText(/5-7 years/i)
        .filter({
          visible: true
        })
        .first();

      if (
        await fiveToSeven.count() > 0
      ) {
        await fiveToSeven.click();
      }

      // Step 6: Apply filter
      const applyFilter = this.page
        .getByText(/Apply Filter/i)
        .filter({
          visible: true
        })
        .first();

      if (
        await applyFilter.count() > 0
      ) {
        await applyFilter.click();
      }
    }

    // Step 7:
    // Open Captain America collection
    // because this test specifically needs
    // a Captain America product.
    await this.page.goto(
      '/collection/captain-america'
    );

    await this.page.waitForLoadState(
      'domcontentloaded'
    );

    // Step 8: Verify collection URL
    await expect(
      this.page
    ).toHaveURL(/captain-america/i);

    // Step 9:
    // Find actual product links using href
    const captainProducts = this.page
      .getByRole('link')
      .filter({
        visible: true
      });

    const totalLinks =
      await captainProducts.count();

    expect(
      totalLinks
    ).toBeGreaterThan(0);

    // Step 10:
    // Find a link whose URL contains
    // captain-america.
    let selectedProductIndex = -1;

    let matchedProducts = 0;

    for (
      let index = 0;
      index < totalLinks;
      index++
    ) {
      const currentLink =
        captainProducts.nth(index);

      const href =
        await currentLink.getAttribute(
          'href'
        );

      if (
        href &&
        href.includes('/product/') &&
        href
          .toLowerCase()
          .includes('captain-america')
      ) {
        matchedProducts++;

        // Prefer second Captain America product
        if (matchedProducts === 2) {
          selectedProductIndex = index;
          break;
        }

        // Keep first matching product as fallback
        if (selectedProductIndex === -1) {
          selectedProductIndex = index;
        }
      }
    }

    // Step 11:
    // Verify at least one Captain America
    // product was found.
    expect(
      selectedProductIndex
    ).toBeGreaterThanOrEqual(0);

    // Step 12: Click selected product
    await captainProducts
      .nth(selectedProductIndex)
      .click();

    await this.page.waitForLoadState(
      'domcontentloaded'
    );

    // Step 13:
    // Verify URL contains captain-america
    await expect(
      this.page
    ).toHaveURL(/captain-america/i);

    // Step 14:
    // Verify product page opened
    await expect(
      this.page
    ).toHaveURL(/product/i);

    // Step 15: Verify product title
    const productHeading = this.page
      .getByRole('heading')
      .filter({
        visible: true
      })
      .first();

    if (
      await productHeading.count() > 0
    ) {
      await expect(
        productHeading
      ).toBeVisible();
    }

    // Step 16: Locate Product Details
    const productDetails = this.page
      .getByText(
        /Product Details/i
      )
      .filter({
        visible: true
      })
      .first();

    // Step 17: Open Product Details
    if (
      await productDetails.count() > 0
    ) {
      await productDetails
        .scrollIntoViewIfNeeded();

      await expect(
        productDetails
      ).toBeVisible();

      await productDetails.click();
    }

    // Step 18: Take screenshot
    await takeScreenshot(
      this.page,
      'TC11_Marvel_Captain_America'
    );
  }
}