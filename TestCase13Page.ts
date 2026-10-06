import { Page, expect } from '@playwright/test';
import { takeScreenshot } from '../utils/Screenshot';

export class TestCase13Page {
  constructor(private page: Page) {}

  async execute() {
    await this.page.goto('/');

    const search = this.page
      .getByRole('textbox')
      .filter({
        visible: true
      })
      .first();

    await expect(search).toBeVisible();

    await search.fill(
      'Skillmatics'
    );

    await search.press('Enter');

    await expect(
      this.page
    ).toHaveURL(/Skillmatics|skillmatics/i);

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

    const products = this.page
      .getByRole('link')
      .filter({
        hasText: /₹/,
        visible: true
      });

    if (
      await products.count() >= 3
    ) {
      await products.nth(2).click();
    }

    await this.page.evaluate(() => {
      window.scrollTo(
        0,
        document.body.scrollHeight
      );
    });

    const facebook = this.page
      .getByText(/Facebook/i)
      .filter({
        visible: true
      })
      .first();

    if (await facebook.count() > 0) {
      const newPagePromise =
        this.page
          .context()
          .waitForEvent('page');

      await facebook.click();

      const facebookPage =
        await newPagePromise;

      await facebookPage
        .waitForLoadState(
          'domcontentloaded'
        );

      await expect(
        facebookPage
      ).toHaveURL(/facebook/i);

      await takeScreenshot(
        facebookPage,
        'TC13_Facebook'
      );

      await facebookPage.close();
    }
  }
}