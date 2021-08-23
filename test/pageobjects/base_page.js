require('dotenv').config();

module.exports = class BasePage {

    open(path) {
        return browser.url(path)
    }
}