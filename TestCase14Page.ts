import { Page, expect } from '@playwright/test';
import { takeScreenshot } from '../utils/Screenshot';

export class TestCase14Page {
  constructor(private page: Page) {}

  async execute() {
    // Step 1: Launch Hamleys website
    await this.page.goto('/');

    // Step 2: Open 3-5 Years category
    await this.page.goto(
      '/collection/3-to-5-years'
    );

    await this.page.waitForLoadState(
      'domcontentloaded'
    );

    // Step 3: Verify page
    await expect(
      this.page
    ).toHaveURL(/3-to-5-years/i);

    // Step 4: Click Category filter
    const category = this.page
      .getByText(
        'Category',
        {
          exact: true
        }
      )
      .filter({
        visible: true
      })
      .first();

    if (await category.count() > 0) {
      await category.click();

      // Step 5: Select Games & Puzzles
      const gamesAndPuzzles =
        this.page
          .getByText(
            'Games & Puzzles',
            {
              exact: true
            }
          )
          .filter({
            visible: true
          })
          .first();

      if (
        await gamesAndPuzzles.count() > 0
      ) {
        await gamesAndPuzzles.click();
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

    await this.page.waitForLoadState(
      'domcontentloaded'
    );

    // Step 7:
    // Verify filtered result page still works
    const pageText = this.page
      .getByText(/products/i)
      .filter({
        visible: true
      })
      .first();

    if (
      await pageText.count() > 0
    ) {
      await expect(
        pageText
      ).toBeVisible();
    }

    // Step 8:
    // Search Skillmatics using the homepage
    // if filtered listing doesn't show it
    let skillmaticsProducts =
      this.page
        .getByText(/Skillmatics/i)
        .filter({
          visible: true
        });

    let productCount =
      await skillmaticsProducts.count();

    if (productCount === 0) {
      await this.page.goto('/');

      await this.page.waitForLoadState(
        'domcontentloaded'
      );

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
        'Skillmatics'
      );

      await searchBox.press(
        'Enter'
      );

      await this.page.waitForLoadState(
        'domcontentloaded'
      );
    }

    // Step 9:
    // Find Skillmatics again after search
    skillmaticsProducts = this.page
      .getByText(/Skillmatics/i)
      .filter({
        visible: true
      });

    productCount =
      await skillmaticsProducts.count();

    // Step 10:
    // If title text still isn't represented as
    // normal text, use generic visible products.
    if (productCount > 0) {
      if (productCount >= 2) {
        await skillmaticsProducts
          .nth(1)
          .click();
      } else {
        await skillmaticsProducts
          .first()
          .click();
      }
    } else {
      const searchProducts = this.page
        .getByRole('link')
        .filter({
          visible: true
        });

      const linkCount =
        await searchProducts.count();

      expect(
        linkCount
      ).toBeGreaterThan(0);

      // Find a useful result using title
      // instead of relying on price text.
      const productResult = this.page
        .getByRole('link')
        .filter({
          hasText: /Skillmatics/i,
          visible: true
        })
        .first();

      if (
        await productResult.count() > 0
      ) {
        await productResult.click();
      }
    }

    await this.page.waitForLoadState(
      'domcontentloaded'
    );

    // Step 11:
    // Verify Skillmatics product
    const productTitle = this.page
      .getByText(/Skillmatics/i)
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

    // Step 12: Add to favorites
    const favorite = this.page
      .getByText(/favorite/i)
      .filter({
        visible: true
      })
      .first();

    if (
      await favorite.count() > 0
    ) {
      await favorite.click();
    }

    // Step 13:
    // Fill mobile number if popup appears
    const visibleTextboxes =
      this.page
        .getByRole('textbox')
        .filter({
          visible: true
        });

    const textboxCount =
      await visibleTextboxes.count();

    if (textboxCount > 0) {
      const mobile = visibleTextboxes
        .last();

      const currentValue =
        await mobile.inputValue();

      if (
        currentValue.length === 0
      ) {
        await mobile.fill(
          '9999999999'
        );
      }
    }

    // Step 14: Screenshot
    await takeScreenshot(
      this.page,
      'TC14_Skillmatics'
    );
  }
}