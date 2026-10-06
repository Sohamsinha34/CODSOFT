import { Page, expect } from '@playwright/test';

export class TestCase08Page {
  constructor(private page: Page) {}

  async execute() {
    await this.page.goto(
      '/collection/vehicles--tracksets'
    );

    await expect(
      this.page
    ).toHaveURL(/vehicles--tracksets/i);

    const sortBy = this.page
      .getByText(/Sort By/i)
      .filter({
        visible: true
      })
      .first();

    if (await sortBy.count() > 0) {
      await sortBy.hover();

      const newest = this.page
        .getByText(
          'New Arrival',
          {
            exact: true
          }
        )
        .filter({
          visible: true
        })
        .first();

      if (
        await newest.count() > 0
      ) {
        await newest.click();
      }
    }

    const products = this.page
      .getByRole('link')
      .filter({
        hasText: /₹/,
        visible: true
      });

    await expect(
      products.first()
    ).toBeVisible();

    await products.first().click();

    const details = this.page
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

    if (await details.count() > 0) {
      await details.click();
    }

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
      await expect(
        specifications
      ).toBeVisible();
    }

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

    if (await addToBag.count() > 0) {
      await addToBag.click();

      await this.page
        .getByText(
          'My bag',
          {
            exact: true
          }
        )
        .filter({
          visible: true
        })
        .first()
        .click();

      await expect(
        this.page
      ).toHaveURL(/cart\/bag/i);
    }
  }
}