import { Page, expect } from '@playwright/test';
import { takeScreenshot } from '../utils/Screenshot';

export class TestCase17Page {
  constructor(private page: Page) {}

  async execute() {
    await this.page.goto('/');

    const productLinks = this.page
      .getByRole('link')
      .filter({
        visible: true
      });

    const totalLinks =
      await productLinks.count();

    expect(
      totalLinks
    ).toBeGreaterThan(0);

    const productText = this.page
      .getByText(/Hamleys/i)
      .filter({
        visible: true
      });

    if (
      await productText.count() >= 2
    ) {
      await productText
        .nth(1)
        .click();
    }

    if (
      !this.page.url().includes(
        '/product/'
      )
    ) {
      await this.page.goto(
        '/product/Lego-Dc-Batman-Construction-Figure-76259-Building-Toy-Set-275-Pieces-8Y-493664229'
      );
    }

    await expect(
      this.page
        .getByText(/Product Highlights/i)
        .filter({
          visible: true
        })
        .first()
    ).toBeVisible();

    await takeScreenshot(
      this.page,
      'TC17_Product'
    );

    const returns = this.page
      .getByText(
        'Returns',
        {
          exact: true
        }
      )
      .filter({
        visible: true
      })
      .first();

    if (await returns.count() > 0) {
      await returns.click();
    }

    const clickHere = this.page
      .getByText(
        'Click Here',
        {
          exact: true
        }
      )
      .filter({
        visible: true
      })
      .first();

    if (await clickHere.count() > 0) {
      await clickHere.click();
    }

    const refundPolicy = this.page
      .getByText(/Refund/i)
      .filter({
        visible: true
      })
      .first();

    if (
      await refundPolicy.count() > 0
    ) {
      await expect(
        refundPolicy
      ).toBeVisible();
    }
  }
}