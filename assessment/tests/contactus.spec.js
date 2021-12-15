const { test, expect } = require('@playwright/test');
const contact = require('../Pages/contactus');

test.describe('contact us tests', () => {

    //check that contact us page exists and works
    test('go to contact page', async ({ page} ) => {

        const text = await contact.contactUsBtn(page);
        expect(text).toBe('CUSTOMER SERVICE - CONTACT US');
    })

    //input credentials and sends message to customer service
    test('send message to customer service', async ({ page }) => {

        const text = await contact.sendMessage(page);
        expect(text).toBe('Your message has been successfully sent to our team.');
    });
})