import { Page, expect } from '@playwright/test';
import { takeScreenshot } from '../utils/Screenshot';

export class TestCase19Page {
  constructor(private page: Page) {}

  async execute() {
    await this.page.goto('/');

    const search = this.page
      .getByRole('textbox')
      .filter({
        visible: true
      })
      .first();

    await search.fill('Avengers');

    await search.press('Enter');

    await expect(
      this.page
    ).toHaveURL(/Avengers|avengers/i);

    const sortBy = this.page
      .getByText(/Sort By/i)
      .filter({
        visible: true
      })
      .first();

    if (await sortBy.count() > 0) {
      await sortBy.hover();

      const newest = this.page
        .getByText(
          'New Arrival',
          {
            exact: true
          }
        )
        .filter({
          visible: true
        })
        .first();

      if (
        await newest.count() > 0
      ) {
        await newest.click();
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

    const instagram = this.page
      .getByText(/Instagram/i)
      .filter({
        visible: true
      })
      .first();

    if (
      await instagram.count() > 0
    ) {
      const newPagePromise =
        this.page.context()
          .waitForEvent('page');

      await instagram.click();

      const instaPage =
        await newPagePromise;

      await instaPage.waitForLoadState(
        'domcontentloaded'
      );

      await expect(
        instaPage
      ).toHaveURL(/instagram/i);

      await takeScreenshot(
        instaPage,
        'TC19_Instagram'
      );

      await instaPage.close();
    }
  }
}