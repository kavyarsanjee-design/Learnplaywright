import { BasePage } from './basePage';

export class MenuPage extends BasePage {
  constructor(page) {
    super(page);

    this.menuBtn = page.locator('#react-burger-menu-btn');
    this.logoutLink = page.locator('#logout_sidebar_link');
  }

  async logout() {
    await this.click(this.menuBtn);
    await this.click(this.logoutLink);
  }
}