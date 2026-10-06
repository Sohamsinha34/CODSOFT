import { Page, expect } from '@playwright/test';
import { takeScreenshot } from '../utils/Screenshot';

export class TestCase03Page {
  constructor(private page: Page) {}

  async execute() {
    await this.page.goto('/');

    await this.page.goto(
      '/collection/art--craft'
    );

    await expect(
      this.page
    ).toHaveURL(/art--craft/i);

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
      600
    );

    await products.first().click();

    await this.page.mouse.wheel(
      0,
      600
    );

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

    await expect(details).toBeVisible();

    await details.click();

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

    await expect(
      this.page
    ).toHaveURL(/bag|checkout/i);

    await takeScreenshot(
      this.page,
      'TC03_Art_Craft'
    );
  }
}