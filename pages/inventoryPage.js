import { BasePage } from './basePage';

export class InventoryPage extends BasePage {
  constructor(page) {
    super(page);

    this.addBackpack = page.locator('#add-to-cart-sauce-labs-backpack');
    this.cartIcon = page.locator('.shopping_cart_link');
  }

  async addProductToCart() {
    await this.click(this.addBackpack);
  }

  async goToCart() {
    await this.click(this.cartIcon);
  }
}