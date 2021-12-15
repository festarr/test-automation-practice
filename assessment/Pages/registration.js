
async function createAccountEmail(page) {

    await page.goto('/index.php?controller=authentication&back=my-account');
    await page.click('input[name="email_create"]');
    
    await page.fill('input[name="email_create"]', 'felix+0@spacee.com');
    await page.click('#SubmitCreate');

    await page.waitForURL('/index.php?controller=authentication&back=my-account#account-creation');
    const text = await page.innerText('.page-heading');
    return text;
}

//helper method to dynamically test different email addresses
async function generateAlias() {
    var chars = 'abcdefghijklmnopqrstuvwxyz1234567890';
    var randomAlias = '';
    for(var ii=0; ii<15; ii++){
    randomAlias += chars[Math.floor(Math.random() * chars.length)];
    }
    return randomAlias;
}


async function newAccountCredentials(page) {

    const alias = await generateAlias();
    const email = alias + '@gmail.com';
    
    await page.goto('/index.php?controller=authentication&back=my-account');
        
    await page.click('input[name="email_create"]');
    await page.fill('input[name="email_create"]', email);

    await page.click('button:has-text("Create an account")');
    await page.waitForURL('/index.php?controller=authentication&back=my-account#account-creation');

    await page.click('input[name="customer_firstname"]');
    await page.fill('input[name="customer_firstname"]', 'Felix');

    await page.click('input[name="customer_lastname"]');
    await page.fill('input[name="customer_lastname"]', 'Starr');

    await page.click('input[name="passwd"]');
    await page.fill('input[name="passwd"]', 'Playwright1');

    await page.selectOption('select[name="days"]', '30');
    await page.selectOption('select[name="months"]', '3');
    await page.selectOption('select[name="years"]', '1997');

    await page.click('input[name="firstname"]');
    await page.fill('input[name="firstname"]', 'Felix');
    
    await page.click('input[name="lastname"]');
    await page.fill('input[name="lastname"]', 'Starr');

    await page.click('input[name="address1"]');
    await page.fill('input[name="address1"]', '3752 Arapaho Rd');

    await page.click('input[name="city"]');
    await page.fill('input[name="city"]', 'Addison');

    await page.selectOption('select[name="id_state"]', '43');

    await page.click('input[name="postcode"]');
    await page.fill('input[name="postcode"]', '75001');

    await page.click('input[name="phone_mobile"]');
    await page.fill('input[name="phone_mobile"]', '1234567890');

    await page.click('input[name="alias"]');
    await page.fill('input[name="alias"]', alias);

    await page.click('button:has-text("Register")');

    await page.waitForURL('/index.php?controller=my-account');
    const text = await page.innerText('.page-heading');
    return text;
}

module.exports = {
    createAccountEmail,
    newAccountCredentials,
    generateAlias,
}