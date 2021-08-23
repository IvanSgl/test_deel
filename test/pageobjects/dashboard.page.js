const BasePage = require('./base_page');

const SELECTORS = {
    HEADING: '[data-qa="heading"]'
};

class CreateFixedContractPage extends BasePage {

    get headingText() {
        return $(SELECTORS.HEADING)
    }

    sideMenu(page){
        return $(`//p[text()="${page}"]`)
    }

    contractType(type) {
        return $(`//h4[text()="${type}"]`);
    }

    // Click methods

    async selectSideMenu(page){
        await this.headingText.waitForDisplayed();
        await (await (await this.sideMenu(page))).click();
    }

    async selectContractType(type) {
        await (await (await this.contractType(type))).click();
    }
}

export default new CreateFixedContractPage();