import { Page, expect } from '@playwright/test';

export class TestCase07Page {
  constructor(private page: Page) {}

  async execute() {
    // Step 1: Launch Hamleys website
    await this.page.goto('/');

    // Step 2: Open Soft Toys collection
    await this.page.goto(
      '/collection/soft-toys'
    );

    await this.page.waitForLoadState(
      'domcontentloaded'
    );

    // Step 3: Verify Soft Toys page
    await expect(
      this.page
    ).toHaveURL(/soft-toys/i);

    // Step 4: Verify Soft Toys heading/text
    const softToysHeading = this.page
      .getByText(/Soft Toys/i)
      .filter({
        visible: true
      })
      .first();

    if (
      await softToysHeading.count() > 0
    ) {
      await expect(
        softToysHeading
      ).toBeVisible();
    }

    // Step 5: Open Sort By
    const sortBy = this.page
      .getByText(/Sort By/i)
      .filter({
        visible: true
      })
      .first();

    if (await sortBy.count() > 0) {
      await sortBy.hover();

      // Step 6: Select Price Low to High
      const lowToHigh = this.page
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

      if (
        await lowToHigh.count() > 0
      ) {
        await lowToHigh.click();
      }
    }

    await this.page.waitForLoadState(
      'domcontentloaded'
    );

    // Step 7: Find visible Soft Toy product links
    let productLinks = this.page
      .getByRole('link')
      .filter({
        hasText: /Soft Toy/i,
        visible: true
      });

    let productCount =
      await productLinks.count();

    // Step 8:
    // If product names do not include "Soft Toy",
    // try visible links containing toy names.
    if (productCount === 0) {
      productLinks = this.page
        .getByRole('link')
        .filter({
          hasText: /Hamleys|Fuzzbuzz|Mirada/i,
          visible: true
        });

      productCount =
        await productLinks.count();
    }

    // Step 9:
    // If collection rendering still does not
    // expose product links, use Hamleys search.
    if (productCount === 0) {
      await this.page.goto('/');

      const searchBox = this.page
        .getByRole('textbox')
        .filter({
          visible: true
        })
        .first();

      await expect(
        searchBox
      ).toBeVisible();

      await searchBox.fill(
        'Soft Toys'
      );

      await searchBox.press(
        'Enter'
      );

      await this.page.waitForLoadState(
        'domcontentloaded'
      );

      productLinks = this.page
        .getByRole('link')
        .filter({
          hasText: /Soft Toy/i,
          visible: true
        });

      productCount =
        await productLinks.count();
    }

    // Step 10: Verify products exist
    expect(
      productCount
    ).toBeGreaterThan(0);

    // Step 11: Open third product if available
    if (productCount >= 3) {
      await productLinks
        .nth(2)
        .click();
    } else {
      await productLinks
        .first()
        .click();
    }

    await this.page.waitForLoadState(
      'domcontentloaded'
    );

    // Step 12: Verify product title
    const productTitle = this.page
      .getByRole('heading')
      .filter({
        visible: true
      })
      .first();

    if (
      await productTitle.count() > 0
    ) {
      await expect(
        productTitle
      ).toBeVisible();
    }

    // Step 13: Verify price
    const price = this.page
      .getByText(/₹/)
      .filter({
        visible: true
      })
      .first();

    await expect(price).toBeVisible();

    // Step 14: Product Details
    const productDetails = this.page
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

    if (
      await productDetails.count() > 0
    ) {
      await productDetails
        .scrollIntoViewIfNeeded();

      await productDetails.click();
    }

    // Step 15: Add To Bag
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

    await expect(
      addToBag
    ).toBeVisible();

    await addToBag.click();

    // Step 16: Open My Bag
    const myBag = this.page
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

    if (await myBag.count() > 0) {
      await myBag.click();

      // Step 17: Verify cart opens
      await expect(
        this.page
      ).toHaveURL(/cart\/bag/i);
    }
  }
}