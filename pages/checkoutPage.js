import { BasePage } from './basePage';

export class CheckoutPage extends BasePage {
  constructor(page) {
    super(page);

    this.firstName = page.locator('#first-name');
    this.lastName = page.locator('#last-name');
    this.postalCode = page.locator('#postal-code');
    this.continueBtn = page.locator('#continue');
    this.finishBtn = page.locator('#finish');
    this.backBtn = page.locator('#back-to-products');
  }

  async enterDetails(first, last, zip) {
    await this.fill(this.firstName, first);
    await this.fill(this.lastName, last);
    await this.fill(this.postalCode, zip);
  }

  async continueCheckout() {
    await this.click(this.continueBtn);
  }

  async finishOrder() {
    await this.click(this.finishBtn);
  }

  async backToProducts() {
    await this.click(this.backBtn);
  }
}