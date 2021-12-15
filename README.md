# automation-practice
This repository is a test suite consisting of 3 different spec.js files that run as 3 different workers:

1. `registration.spec.js` tests registration steps
2. `checkout.spec.js` tests checkout steps
3. `contactus.spec.js` tests contactus steps

`global-setup.js` is used to open a browser page and sign in and add an item to the cart. This browser's cookies are stored in `assessment.json` to be able to skip authentication in certain tests that require the user to be logged in. Similarly, any tests that require an item to already be in the cart will use `assessment.json` in order to improve performance

All tests included cover positive-only scenarios, and are conducted on the website `automationpractice.com`.
Coded with the Playwright JavaScript Front-End testing tool

# How to run locally

[First make sure you have Playwright installed. Assuming you have npm in your machine `npm i -D @playwright/test`](https://playwright.dev/docs/intro#installation)

0. Install Playwright. `npx playwright install`
1. In the terminal, to simply run the tests `npx playwright test`
2. To run tests with the browser opening and showing visually `npx playwright --headed`
3. To run tests step by step change the environment with `$env:PWDEBUG=1`, and then run `npx playwright --headed`
4. To run a specific browser add a parameter `--browser=firefox` or if you want to run all browsers use `--browser=all`

Full command example:
`npx playwright test --browser=all --headed`
