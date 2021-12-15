const register = require('./registration');
async function contactUsBtn (page){

    await page.goto('http://automationpractice.com/index.php');
    await page.click('a[href^="http://automationpractice.com/index.php?controller=contact"]');
    const text = await page.innerText('.page-heading');
    return text;
}

async function sendMessage (page) {

    const email = await register.generateAlias() + '@gmail.com';

    contactUsBtn(page);

    await page.selectOption('select[name="id_contact"]', '2');
    await page.click('input[name="from"]')
    await page.fill('input[name="from"]', email);

    await page.click('textarea[name="message"]');
    await page.fill('textarea[name="message"]', 'Hello, you guys need to improve this website please.');

    await page.click('button:has-text("Send")');
    const text = await page.innerText('text=Your message has been successfully sent to our team.');
    return text;
}

module.exports = {
    contactUsBtn,
    sendMessage,
}