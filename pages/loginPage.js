import { BasePage } from './basePage';

export class LoginPage extends BasePage {
  constructor(page) {
    super(page);

    this.username = page.locator('#user-name');
    this.password = page.locator('#password');
    this.loginBtn = page.locator('#login-button');
  }

  async goto() {
    await this.page.goto('https://www.saucedemo.com/');
    //await this.navigate(process.env.BASE_URL);
  }

  async login(username, password) {
    await this.fill(this.username, username);
    await this.fill(this.password, password);
    await this.click(this.loginBtn);
  }
}