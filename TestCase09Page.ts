import { Page, expect } from '@playwright/test';
import { takeScreenshot } from '../utils/Screenshot';

export class TestCase09Page {
  constructor(private page: Page) {}

  async execute() {
    await this.page.goto(
      '/products?brand=barbie'
    );

    await expect(
      this.page
    ).toHaveURL(/barbie/i);

    const ageGroup = this.page
      .getByText(
        'Age Group',
        {
          exact: true
        }
      )
      .filter({
        visible: true
      })
      .first();

    if (
      await ageGroup.count() > 0
    ) {
      await ageGroup.click();

      const checkbox =
        this.page
          .getByRole('checkbox')
          .filter({
            visible: true
          })
          .first();

      if (
        await checkbox.count() > 0
      ) {
        await checkbox.check();
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

    const products = this.page
      .getByRole('link')
      .filter({
        hasText: /₹/,
        visible: true
      });

    const count =
      await products.count();

    expect(count).toBeGreaterThan(0);

    if (count >= 3) {
      await products.nth(2).click();
    } else {
      await products.first().click();
    }

    await expect(
      this.page
        .getByRole('heading')
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

    if (await details.count() > 0) {
      await details
        .scrollIntoViewIfNeeded();

      await expect(details).toBeVisible();
    }

    await takeScreenshot(
      this.page,
      'TC09_Barbie'
    );
  }
}