const BasePage = require('./base_page');

const SELECTORS = {
    NAME: '[name="name"]',
    SCOPE: '[name="scope"]',
    START_DATE: '[name="effectiveDate"]',
    NEXT_BTN: 'button[theme="primary"]',
    RATE: '[name="rate"]',
    CURRENCY: '[data-qa="currency-select"] .select',
    CYCLE: '[data-qa="cycle-select"] .select',
    CLAUSE: '[data-qa="special-clause-card"] button',
    SPECIAL_CLAUSE: '[data-qa="special-clause-card"] textarea',
    RESIDENCE: '[data-qa="contractor-tax-residence"] .select',
    RESIDENCE_STATE: '[data-qa="contractor-tax-residence-province"] .select',
};

class CreateContractsPage extends BasePage {

    get txtContractName() {
        return $(SELECTORS.NAME);
    }

    get txtScopeOfWork() {
        return $(SELECTORS.SCOPE);
    }

    get startDate() {
        return $(SELECTORS.START_DATE)
    }

    get nextButton() {
        return $(SELECTORS.NEXT_BTN);
    }

    get txtRate() {
        return $(SELECTORS.RATE)
    }

    get currencyDropdown() {
        return $(SELECTORS.CURRENCY)
    }

    get cycleDropdown(){
        return $(SELECTORS.CYCLE)
    }

    get addSpecialClauseButton(){
        return $(SELECTORS.CLAUSE)
    }

    get txtSpecialClause(){
        return $(SELECTORS.SPECIAL_CLAUSE)
    }

    get taxResidenceDropdown(){
        return $(SELECTORS.RESIDENCE)
    }

    get taxResidenceStateDropdown(){
        return $(SELECTORS.RESIDENCE_STATE)
    }

    // Fill methods

    async fillContractNameField(name) {
        await (await this.txtContractName).waitForDisplayed();
        await (await this.txtContractName).setValue(name);
    }

    async fillScopeOfWorkField(scope) {
        await (await this.txtScopeOfWork).setValue(scope);
    }

    async fillRateField(rate) {
        await (await this.txtRate).waitForDisplayed();
        await (await this.txtRate).setValue(rate);
    }

    async fillSpecialClauseField(text) {
        await (await this.txtSpecialClause).setValue(text);
    }

    // Click methods

    async selectStartDate(date) {
        await (await this.startDate).click();
        await (await $(`[aria-label="${date.format('D MMMM YYYY')}"]`)).click();
    }

    async clickNextButton() {
        await (await (await this.nextButton).waitForClickable());
        await (await this.nextButton).click();
    }

    async selectCurrency(currency) {
        await (await this.currencyDropdown).click();
        await (await $(`div=${currency}`)).click()
    }

    async selectCycle(cycle) {
        await (await this.cycleDropdown).click();
        await (await $(`div=${cycle}`)).click()
    }

    async clickAddSpecialClause() {
        await (await this.addSpecialClauseButton).waitForDisplayed();
        await (await this.addSpecialClauseButton).click();
    }

    async selectTaxResidenceCountry(country) {
        await (await this.taxResidenceDropdown).waitForDisplayed();
        await (await this.taxResidenceDropdown).click();
        await (await $(`div=${country}`)).click()
    }

    async selectTaxResidenceState(state) {
        await (await this.taxResidenceStateDropdown).click();
        await (await $(`div=${state}`)).click()
    }
}

export default new CreateContractsPage();