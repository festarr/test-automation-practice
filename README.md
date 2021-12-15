# automation-practice
This repository is a test suite consisting of 3 different spec.js files that run as 3 different workers:

1. registration.spec.js tests registration steps
2. checkout.spec.js tests checkout steps
3. contactus.spec.js tests contactus steps

All tests included cover positive-only scenarios, and are conducted on the website automationpractice.com.
Coded with the Playwright JavaScript Front-End testing tool

# How to run locally

[First make sure to have Playwright installed](https://playwright.dev/docs/intro)

1. In the terminal, to simply run the tests `npx playwright test`
2. To run tests with the browser opening and showing visually `npx playwright --headed`
3. To run tests step by step change the environment with `$env:PWDEBUG=1`, and then run `npx playwright --headed`
4. To run a specific browser add a parameter `--browser=firefox` or `--browser=all` for chromium, firefox, and webkit
