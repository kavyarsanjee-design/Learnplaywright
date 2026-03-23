import { BasePage } from './basePage';

export class CartPage extends BasePage {
  constructor(page) {
    super(page);

    this.checkoutBtn = page.locator('#checkout');
  }

  async checkout() {
    await this.click(this.checkoutBtn);
  }
}