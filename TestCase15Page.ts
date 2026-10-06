import { Page, expect } from '@playwright/test';

export class TestCase15Page {
  constructor(private page: Page) {}

  async execute() {
    await this.page.goto('/');

    const product = this.page
      .getByText(
        /Mirada Marvel Black Panther/i
      )
      .filter({
        visible: true
      })
      .first();

    if (await product.count() > 0) {
      await product
        .scrollIntoViewIfNeeded();

      await product.click();
    } else {
      const search = this.page
        .getByRole('textbox')
        .filter({
          visible: true
        })
        .first();

      await search.fill(
        'Mirada Marvel Black Panther'
      );

      await search.press('Enter');

      await this.page
        .getByText(
          /Mirada Marvel Black Panther/i
        )
        .filter({
          visible: true
        })
        .first()
        .click();
    }

    await expect(
      this.page
        .getByRole('heading')
        .filter({
          visible: true
        })
        .first()
    ).toBeVisible();

    const specifications = this.page
      .getByText(
        'Specifications',
        {
          exact: true
        }
      )
      .filter({
        visible: true
      })
      .first();

    if (
      await specifications.count() > 0
    ) {
      await specifications.click();
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

    if (await addToBag.count() > 0) {
      await addToBag.click();

      await this.page
        .getByText(
          'My bag',
          {
            exact: true
          }
        )
        .filter({
          visible: true
        })
        .first()
        .click();
    }
  }
}