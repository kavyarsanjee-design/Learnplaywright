import { test, expect } from '../fixtures/baseTest';
import { testData } from '../utils/testData';

test('End-to-End Purchase Flow', async ({ pages }) => {

  const { loginPage, inventoryPage, cartPage, checkoutPage, menuPage } = pages;

  await loginPage.goto();
  await loginPage.login(
    testData.user.username,
    testData.user.password
  );

  await inventoryPage.addProductToCart();
  await inventoryPage.goToCart();

  await cartPage.checkout();

  await checkoutPage.enterDetails(
    testData.checkout.firstName,
    testData.checkout.lastName,
    testData.checkout.zip
  );

  await checkoutPage.continueCheckout();
  await checkoutPage.finishOrder();
  await checkoutPage.backToProducts();

  await menuPage.logout();
});