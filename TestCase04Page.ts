import { Page, expect } from '@playwright/test';
import { takeScreenshot } from '../utils/Screenshot';

export class TestCase04Page {
  constructor(private page: Page) {}

  async execute() {
    await this.page.goto(
      '/collection/games--puzzles'
    );

    await expect(
      this.page
    ).toHaveURL(/games--puzzles/i);

    const siroProduct = this.page
      .getByText(
        /SIRO Smart Play Board/i
      )
      .filter({
        visible: true
      })
      .first();

    await expect(
      siroProduct
    ).toBeVisible();

    await this.page.mouse.wheel(
      0,
      500
    );

    await siroProduct.click();

    await this.page.waitForLoadState(
      'domcontentloaded'
    );

    const productTitle = this.page
      .getByText(
        /SIRO Smart Play Board/i
      )
      .filter({
        visible: true
      })
      .first();

    await expect(
      productTitle
    ).toBeVisible();

    await expect(
      this.page
        .getByRole('img')
        .filter({
          visible: true
        })
        .first()
    ).toBeVisible();

    const details = this.page
      .getByText(/Product Details/i)
      .filter({
        visible: true
      })
      .first();

    if (await details.count() > 0) {
      await details.scrollIntoViewIfNeeded();

      await details.click();

      await expect(
        details
      ).toBeVisible();
    }

    await takeScreenshot(
      this.page,
      'TC04_SIRO_Details'
    );

    const delivery = this.page
      .getByText(
        /Delivery Information/i
      )
      .filter({
        visible: true
      })
      .first();

    if (await delivery.count() > 0) {
      await delivery
        .scrollIntoViewIfNeeded();
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
    }

    const myBag = this.page
      .getByText(
        'My bag',
        {
          exact: true
        }
      )
      .filter({
        visible: true
      })
      .first();

    if (await myBag.count() > 0) {
      await myBag.click();

      await expect(
        this.page
          .getByText(/SIRO/i)
          .filter({
            visible: true
          })
          .first()
      ).toBeVisible();
    }
  }
}