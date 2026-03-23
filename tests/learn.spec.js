import {test} from '@playwright/test';
test.only ('login',async ({page})=>
{
   await page.goto("https://www.saucedemo.com/");
   await page.pause();
   await page.fill('#user-name','standard_user');
   await page.fill('#password','secret_sauce');
   await page.locator("//input[@id='login-button']").click();
   await page.locator("//button[@id='add-to-cart-sauce-labs-backpack']").click();
   await page.locator("//a[@class='shopping_cart_link']").click();
   await page.locator("//button[@id='checkout']").click();
   await page.fill('#first-name','TestKRS');
   await page.fill('#last-name','KRS');
   await page.fill('#postal-code','572201');
   await page.locator("//input[@id='continue']").click();
   await page.locator("//button[@id='finish']").click();
   await page.locator("//button[@id='back-to-products']").click();
   await page.locator("//button[@id='react-burger-menu-btn']").click();
   await page.locator("//a[@id='logout_sidebar_link']").click();
})
test ('launch amazon' , async ({page})=>{

   await page.goto("https://www.amazon.in/");
})
