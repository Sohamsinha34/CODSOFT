import { Page, expect } from '@playwright/test';

export class TestCase06Page {
  constructor(private page: Page) {}

  async execute() {
    await this.page.goto('/');

    const premiumDolls = this.page
      .getByText(/Premium Dolls/i)
      .filter({
        visible: true
      })
      .first();

    if (
      await premiumDolls.count() > 0
    ) {
      await premiumDolls
        .scrollIntoViewIfNeeded();

      await premiumDolls.click();
    } else {
      await this.page.goto(
        '/collection/dolls--roleplay'
      );
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

    await this.page.mouse.wheel(
      0,
      500
    );

    await products.first().click();

    await expect(
      this.page
        .getByRole('img')
        .filter({
          visible: true
        })
        .first()
    ).toBeVisible();

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

    await details.scrollIntoViewIfNeeded();

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

    await expect(addToBag).toBeVisible();

    await addToBag.click();

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

    await expect(myBag).toBeVisible();
  }
}