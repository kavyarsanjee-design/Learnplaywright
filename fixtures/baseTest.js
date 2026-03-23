import { test as base } from '@playwright/test';
import { LoginPage } from '../pages/loginPage';
import { InventoryPage } from '../pages/inventoryPage';
import { CartPage } from '../pages/cartPage';
import { CheckoutPage } from '../pages/checkoutPage';
import { MenuPage } from '../pages/menuPage';

export const test = base.extend({
  pages: async ({ page }, use) => {
    await use({
      loginPage: new LoginPage(page),
      inventoryPage: new InventoryPage(page),
      cartPage: new CartPage(page),
      checkoutPage: new CheckoutPage(page),
      menuPage: new MenuPage(page)
    });
  }
});

export { expect } from '@playwright/test';