const faker = require('faker');
const moment = require('moment');

module.exports = {
    contracts: {
        fixedContract: {
            type: "Fixed rate",
            contractName: faker.company.companyName(),
            scopeOfWork: faker.lorem.sentence(),
            startDate: moment().subtract(1, 'days'),
            rate: "1000",
            currency: "GBP - British Pound",
            cycle: "Week",
            specialClause: faker.lorem.sentence(),
            taxResidenceCountry: "United States",
            taxResidenceState: "Colorado",
        },
        payAsYouGoContract: {
            type: "Pay as you go",
            contractName: faker.company.companyName(),
            scopeOfWork: faker.lorem.sentence(),
            startDate: moment().subtract(1, 'days'),
            rate: "1000",
            currency: "GBP - British Pound",
            cycle: "Weekly",
            specialClause: faker.lorem.sentence(),
            taxResidenceCountry: "United States",
            taxResidenceState: "Colorado",
        }
    }
}