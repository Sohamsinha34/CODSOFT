import { Page, expect } from '@playwright/test';
import { takeScreenshot } from '../utils/Screenshot';

export class TestCase16Page {
  constructor(private page: Page) {}

  async execute() {
    await this.page.goto(
      '/collection/farmers-market-soft-toys'
    );

    await expect(
      this.page
    ).toHaveURL(/farmers-market/i);

    const banana = this.page
      .getByText(
        /Farmers Market Banana Soft Toy/i
      )
      .filter({
        visible: true
      })
      .first();

    await expect(banana).toBeVisible();

    await banana.click();

    await expect(
      this.page
        .getByText(
          /Farmers Market Banana/i
        )
        .filter({
          visible: true
        })
        .first()
    ).toBeVisible();

    await this.page.evaluate(() => {
      window.scrollTo(
        0,
        document.body.scrollHeight
      );
    });

    const deliveryPolicy =
      this.page
        .getByText(
          'Delivery Policy',
          {
            exact: true
          }
        )
        .filter({
          visible: true
        })
        .first();

    if (
      await deliveryPolicy.count() > 0
    ) {
      await deliveryPolicy.click();

      await takeScreenshot(
        this.page,
        'TC16_Delivery_Policy'
      );
    }
  }
}