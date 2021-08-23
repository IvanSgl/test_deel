require('dotenv').config();
const url = require ('./env.config')
const ENV = process.env.ENV

if (!ENV || !['qa', 'dev', 'prod'].includes(ENV)) {
    console.log('Please set ENV value : ENV=qa|dev|prod')
    process.exit()
}

exports.config = {
    // ====================
    // Runner and framework
    // Configuration
    // ====================
    runner: 'local',
    specFileRetries: 1,
    specs: [
        './test/specs/**/*.spec.js'
    ],
    baseUrl: url[process.env.ENV],
    maxInstances: 5,
    capabilities: [{
        maxInstances: 5,
        browserName: 'chrome',
        acceptInsecureCerts: true,
        'goog:chromeOptions': {
            args: [
                '--no-sandbox',
                '--disable-infobars',
                '--disable-gpu',
                '--window-size=1920,1080'
            ],
        }
    }],
    logLevel: 'silent',
    bail: 0,
    waitforTimeout: 15000,
    connectionRetryTimeout: 120000,
    connectionRetryCount: 3,
    services: ['chromedriver'],
    reporters: [['allure', {
        outputDir: 'allure-results'
    }]],
    framework: 'mocha',
    mochaOpts: {
        ui: 'bdd',
        timeout: 60000
    }
}