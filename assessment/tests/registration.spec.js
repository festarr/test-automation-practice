const { test, expect } = require('@playwright/test');
const signIn = require('../Pages/registration');

test.describe('registration tests', () => {

    //this test uses an email that has never registered to check if the website successfully accepts it as a new email
    test('email address available for registration', async ({ page }) => {
        const text = await signIn.createAccountEmail(page);
        expect(text).toBe('CREATE AN ACCOUNT');
    });
    
    //this test inputs correct credentials into a new account and checks if the account was successfully created
    test('new account credentials are valid', async ({ page }) => {
        const text = await signIn.newAccountCredentials(page);
        expect(text).toBe('MY ACCOUNT');
    });
    
    //this test uses the login credentials stored in assessment.json and checks that authentication is working
    test.describe('logged in tests', () =>{
        test.use({ storageState: 'assessment.json' });
        test('verify account exists', async ({ page }) => {
        
            await page.goto('/index.php?controller=my-account');  
            const text = await page.innerText('.page-heading');
            expect(text).toBe('MY ACCOUNT');
        
        });
    })
})