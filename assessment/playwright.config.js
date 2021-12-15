// playwright.config.js
// @ts-check

/** @type {import('@playwright/test').PlaywrightTestConfig} */
const config = {
    use: {
      baseURL: 'http://automationpractice.com',
    },

    //the automationpractice.com website sometimes is very very slow
    timeout: 60000,
    retries: 2,
    globalSetup: require.resolve('./global-setup'),
  };
  
  module.exports = config;