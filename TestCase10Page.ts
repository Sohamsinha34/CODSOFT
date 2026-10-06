import { Page, expect } from '@playwright/test';
import { takeScreenshot } from '../utils/Screenshot';

export class TestCase10Page {
  constructor(private page: Page) {}

  async execute() {
    await this.page.goto(
      '/collection/soft-toys'
    );

    const product = this.page
      .getByRole('link')
      .filter({
        hasText: /₹/,
        visible: true
      })
      .first();

    await expect(product).toBeVisible();

    await product.click();

    const pincode = this.page
      .getByPlaceholder(/pincode/i)
      .filter({
        visible: true
      })
      .first();

    if (await pincode.count() > 0) {
      await pincode.fill('');

      await pincode.fill('123');

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
    }

    await this.page.evaluate(() => {
      window.scrollTo(
        0,
        document.body.scrollHeight
      );
    });

    const newsletter = this.page
      .getByText(/Newsletter/i)
      .filter({
        visible: true
      })
      .first();

    await expect(
      newsletter
    ).toBeVisible();

    const email = this.page
      .getByPlaceholder(/email/i)
      .filter({
        visible: true
      })
      .first();

    if (await email.count() > 0) {
      await email.fill('wrong-email');

      const subscribe = this.page
        .getByText(/Subscribe/i)
        .filter({
          visible: true
        })
        .first();

      if (
        await subscribe.count() > 0
      ) {
        await subscribe.click();
      }
    }

    await takeScreenshot(
      this.page,
      'TC10_Negative'
    );
  }
}
