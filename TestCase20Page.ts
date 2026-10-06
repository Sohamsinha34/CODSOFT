import { Page, expect } from '@playwright/test';

export class TestCase20Page {
  constructor(private page: Page) {}

  async execute() {
    await this.page.goto(
      '/collection/peppa-pig'
    );

    await expect(
      this.page
    ).toHaveURL(/peppa-pig/i);

    const peppaProducts = this.page
      .getByText(/Peppa/i)
      .filter({
        visible: true
      });

    const count =
      await peppaProducts.count();

    expect(count).toBeGreaterThan(0);

    await peppaProducts
      .first()
      .click();

    await this.page.waitForLoadState(
      'domcontentloaded'
    );

    await expect(
      this.page
        .getByText(/Peppa/i)
        .filter({
          visible: true
        })
        .first()
    ).toBeVisible();

    const details = this.page
      .getByText(/Product Details/i)
      .filter({
        visible: true
      })
      .first();

    if (await details.count() > 0) {
      await details.click();
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

    const checkout = this.page
      .getByText(/Checkout/i)
      .filter({
        visible: true
      })
      .first();

    if (await checkout.count() > 0) {
      await expect(
        checkout
      ).toBeVisible();

      await checkout.click();
    }
  }
}