import { Page, expect } from '@playwright/test';
import { takeScreenshot } from '../utils/Screenshot';

export class TestCase02Page {
  constructor(private page: Page) {}

  async execute() {
    await this.page.goto(
      '/products?brand=lego'
    );

    await expect(
      this.page
    ).toHaveURL(/lego/i);

    const sortBy = this.page
      .getByText(/Sort By/i)
      .filter({
        visible: true
      })
      .first();

    if (await sortBy.count() > 0) {
      await sortBy.hover();

      const newest = this.page
        .getByText(/New Arrival/i)
        .filter({
          visible: true
        })
        .first();

      if (await newest.count() > 0) {
        await newest.click();
      }
    }

    const legoProducts = this.page
      .getByText(/LEGO/i)
      .filter({
        visible: true
      });

    const count =
      await legoProducts.count();

    expect(count).toBeGreaterThan(0);

    await legoProducts
      .first()
      .click();

    await this.page.waitForLoadState(
      'domcontentloaded'
    );

    await expect(
      this.page
        .getByRole('img')
        .filter({
          visible: true
        })
        .first()
    ).toBeVisible();

    const title = this.page
      .getByText(/LEGO/i)
      .filter({
        visible: true
      })
      .first();

    await expect(title).toBeVisible();

    const details = this.page
      .getByText(/Product Details/i)
      .filter({
        visible: true
      })
      .first();

    if (await details.count() > 0) {
      await details.scrollIntoViewIfNeeded();

      await expect(
        details
      ).toBeVisible();

      await details.click();
    }

    await takeScreenshot(
      this.page,
      'TC02_LEGO_Product'
    );

    await this.page.goBack();
  }
}