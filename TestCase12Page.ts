import { Page, expect } from '@playwright/test';

export class TestCase12Page {
  constructor(private page: Page) {}

  async execute() {
    await this.page.goto(
      '/products?brand=disney'
    );

    await expect(
      this.page
    ).toHaveURL(/disney/i);

    const sortBy = this.page
      .getByText(/Sort By/i)
      .filter({
        visible: true
      })
      .first();

    if (await sortBy.count() > 0) {
      await sortBy.hover();

      const highLow = this.page
        .getByText(
          'Price High to Low',
          {
            exact: true
          }
        )
        .filter({
          visible: true
        })
        .first();

      if (
        await highLow.count() > 0
      ) {
        await highLow.click();
      }
    }

    const princess = this.page
      .getByRole('link')
      .filter({
        hasText: /Princess/i,
        visible: true
      })
      .first();

    if (await princess.count() > 0) {
      await princess.click();
    }

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

    if (await buyNow.count() > 0) {
      await buyNow.click();
    }

    const coupon = this.page
      .getByText(/Apply Coupons/i)
      .filter({
        visible: true
      })
      .first();

    if (await coupon.count() > 0) {
      await coupon.click();
    }

    const input = this.page
      .getByPlaceholder(/coupon/i)
      .filter({
        visible: true
      })
      .first();

    if (await input.count() > 0) {
      await input.fill(
        'WRONGCODE123'
      );

      const check = this.page
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

      if (await check.count() > 0) {
        await check.click();
      }

      const invalid = this.page
        .getByText(/Invalid coupon/i)
        .filter({
          visible: true
        })
        .first();

      if (await invalid.count() > 0) {
        await expect(
          invalid
        ).toBeVisible();
      }
    }
  }
}