const MainPage = require('./base_page');

const SELECTORS = {
    EMAIL: '[name="email"]',
    PASSWORD: '[name="password"]',
    SUBMIT: '[type="submit"]',
};

class LoginPage extends MainPage {
    get inputEmail() {
        return $(SELECTORS.EMAIL)
    }

    get inputPassword() {
        return $(SELECTORS.PASSWORD)
    }

    get btnSubmit() {
        return $(SELECTORS.SUBMIT)
    }

    async login(email, password) {
        await (await this.inputEmail).waitForDisplayed();
        await (await this.inputEmail).setValue(email);
        await (await this.inputPassword).setValue(password);
        await (await this.btnSubmit).click();
    }

    open() {
        return super.open('login');
    }
}

export default new LoginPage();