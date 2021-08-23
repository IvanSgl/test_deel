const allureReporter = require('@wdio/allure-reporter').default;
import LoginPage from '../../pageobjects/login.page'
import DashboardPage from '../../pageobjects/dashboard.page'
import ContractPage from '../../pageobjects/createContracts.page'
import DetailsPage from '../../pageobjects/contractDetails.page'

const usersData = require('../../test_data/users/users');
const contractData = require('../../test_data/contracts/contracts');
const individualCreds = usersData.users.individualClient;
const ContractData = contractData.contracts.fixedContract;

describe('Contracts', () => {

    beforeEach(async () => {
        await LoginPage.open();
        await LoginPage.login(individualCreds['email'], individualCreds['password']);
    });

    it('user should be able to create a "Fixed" contract', async () => {
        allureReporter.addFeature('Create Contract');
        allureReporter.addStory('Create "Fixed" Contract');

        // Create a contract
        await DashboardPage.selectSideMenu('Create A Contract');
        await DashboardPage.selectContractType('Fixed Rate');
        await ContractPage.fillContractNameField(ContractData['contractName']);
        await ContractPage.fillScopeOfWorkField(ContractData['scopeOfWork']);
        await ContractPage.selectStartDate(ContractData['startDate']);
        await ContractPage.clickNextButton();
        await ContractPage.fillRateField(ContractData['rate']);
        await ContractPage.selectCurrency(ContractData['currency']);
        await ContractPage.selectCycle(ContractData['cycle']);
        await ContractPage.clickNextButton();
        await ContractPage.clickNextButton();
        await ContractPage.clickAddSpecialClause();
        await ContractPage.fillSpecialClauseField(ContractData['specialClause']);
        await ContractPage.clickNextButton();
        await ContractPage.selectTaxResidenceCountry(ContractData['taxResidenceCountry']);
        await ContractPage.selectTaxResidenceState(ContractData['taxResidenceState'])
        await ContractPage.clickNextButton();

        // Check contract details
        await DetailsPage.checkContractType(ContractData['type']);
        await DetailsPage.checkContractStartDate(ContractData['startDate']);
        await DetailsPage.checkContractRate(ContractData['rate']);
        await DetailsPage.checkContactCycle(ContractData['cycle']);
        await DetailsPage.checkContractorCountry(ContractData['taxResidenceState'], ContractData['taxResidenceCountry']);
        await DetailsPage.checkContractScope(ContractData['scopeOfWork'])
        await DetailsPage.checkSpecialClause(ContractData['specialClause']);
    });
});