import { Page, expect } from '@playwright/test';

export class TestCase01Page {
  constructor(private page: Page) {}

  async execute() {
    await this.page.goto('/');

    await this.page.evaluate(() => {
      window.scrollTo(0, 900);
    });

    await this.page.goto(
      '/collections/category-toys-games-construction-building-toys'
    );

    await expect(
      this.page.getByText(
        /Construction & Building/i
      ).filter({
        visible: true
      }).first()
    ).toBeVisible();

    const category = this.page
      .getByText('Category', {
        exact: true
      })
      .filter({
        visible: true
      })
      .first();

    if (await category.count() > 0) {
      await category.click();

      const construction = this.page
        .getByText(
          'Construction & Building',
          {
            exact: true
          }
        )
        .filter({
          visible: true
        })
        .first();

      if (
        await construction.count() > 0
      ) {
        await construction.click();
      }

      const apply = this.page
        .getByText(/Apply Filter/i)
        .filter({
          visible: true
        })
        .first();

      if (await apply.count() > 0) {
        await apply.click();
      }
    }

    const hogwarts = this.page
      .getByText(/Hogwarts/i)
      .filter({
        visible: true
      })
      .first();

    await expect(hogwarts).toBeVisible();

    await hogwarts.click();

    await expect(
      this.page
        .getByRole('heading')
        .filter({
          hasText: /Hogwarts/i,
          visible: true
        })
        .first()
    ).toBeVisible();

    const addToBag = this.page
      .getByText('Add to bag', {
        exact: true
      })
      .filter({
        visible: true
      })
      .first();

    await expect(addToBag).toBeVisible();

    await addToBag.click();

    const buyNow = this.page
      .getByText('Buy now', {
        exact: true
      })
      .filter({
        visible: true
      })
      .first();

    if (await buyNow.count() > 0) {
      await buyNow.click();
    }

    await expect(
      this.page
    ).toHaveURL(/bag|checkout/i);

    const checkout = this.page
      .getByText(/Checkout/i)
      .filter({
        visible: true
      })
      .first();

    if (await checkout.count() > 0) {
      await checkout.click();
    }
  }
}