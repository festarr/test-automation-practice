//global-setup.js
const { chromium } = require('@playwright/test');

module.exports = async () => {
    const browser = await chromium.launch();
    const page = await browser.newPage();

    //sign in credentials
    await page.goto('http://automationpractice.com/index.php?controller=authentication&back=my-account');

    await page.click('input[name="email"]');
    await page.fill('input[name="email"]', 'felix@spacee.com');

    await page.click('input[name="passwd"]');
    await page.fill('input[name="passwd"]', 'Playwright');

    await page.click('button:has-text("Sign in")');

    //add item to cart
    await page.goto('http://automationpractice.com/index.php?id_product=2&controller=product');
    await page.click('button:has-text("Add to cart")');

    // Save storage state into the file.
    await page.context().storageState({ path: 'assessment.json' });    
    await browser.close();
}
