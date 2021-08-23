const BasePage = require('./base_page');

const SELECTORS = {
    TYPE: '[data-qa="contract-type"]',
    START_DATE: '[data-qa="contractors-start-date"]',
    RATE: '[data-qa="rate"]',
    CYCLE: '[data-qa="rate"] div',
    SCOPE: '.scope-text',
    COUNTRY: '[data-qa="contractors-country"]',
    CLAUSE: '[data-qa="dpa-row-special-clause-value"] .pre-wrap',
};

class DetailsPage extends BasePage {
    get contactTypeDetail() {
        return $(SELECTORS.TYPE)
    }

    get contractStartDateDetail() {
        return $(SELECTORS.START_DATE)
    }

    get contractRateDetail() {
        return $(SELECTORS.RATE)
    }

    get contractCycleDetail() {
        return $(SELECTORS.CYCLE)
    }

    get contractScopeDetail() {
        return $(SELECTORS.SCOPE)
    }

    get contractorCountryDetail() {
        return $(SELECTORS.COUNTRY)
    }

    get specialClauseDetail() {
        return $(SELECTORS.CLAUSE)
    }

    // Check methods

    async checkContractType(type) {
        await (await this.contactTypeDetail).waitForDisplayed();
        expect(await (await this.contactTypeDetail).getText()).toEqual(type);
    }

    async checkContractStartDate(date) {
        expect(await (await this.contractStartDateDetail).getText()).toEqual(date.format('MMM Do, YYYY'));
    }

    async checkContractRate(rate) {
        const formattedRate = new Intl.NumberFormat('en-IN', {maximumSignificantDigits: 3}).format(rate);
        expect(await (await this.contractRateDetail).getText()).toContain(formattedRate);
    }

    async checkContactCycle(cycle) {
        expect(await (await this.contractCycleDetail).getText()).toContain(cycle.toLowerCase());
    }

    async checkContractorCountry(province, country) {
        expect(await (await this.contractorCountryDetail).getText()).toEqual(`${province} (${country})`);
    }

    async checkContractScope(scope) {
        expect(await (await this.contractScopeDetail).getText()).toEqual(scope);
    }

    async checkSpecialClause(clause) {
        expect(await (await this.specialClauseDetail).getText()).toEqual(clause);
    }
}

export default new DetailsPage();