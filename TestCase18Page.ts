import { Page, expect } from '@playwright/test';
import { takeScreenshot } from '../utils/Screenshot';

export class TestCase18Page {
  constructor(private page: Page) {}

  async execute() {
    await this.page.goto(
      '/collection/12-plus-years'
    );

    const country = this.page
      .getByText(
        'Country of Origin',
        {
          exact: true
        }
      )
      .filter({
        visible: true
      })
      .first();

    if (await country.count() > 0) {
      await country.click();

      const india = this.page
        .getByText(
          'India',
          {
            exact: true
          }
        )
        .filter({
          visible: true
        })
        .first();

      if (await india.count() > 0) {
        await india.click();
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

    const drone = this.page
      .getByRole('link')
      .filter({
        hasText: /Drone/i,
        visible: true
      })
      .first();

    await expect(drone).toBeVisible();

    await drone.click();

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

    await expect(buyNow).toBeVisible();

    await buyNow.click();

    await expect(
      this.page
    ).toHaveURL(/bag|checkout/i);

    await takeScreenshot(
      this.page,
      'TC18_Drone'
    );
  }
}