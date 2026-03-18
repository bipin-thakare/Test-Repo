 
       import { Given, When, Then } from '@cucumber/cucumber';
       import { Browser, chromium, Page } from 'playwright';

       let browser: Browser;
       let page: Page;

         Given('user is on the home page', async function () {
            //launch browser
            browser = await chromium.launch({ headless: false });

            //create page
            page = await browser.newPage();

            //navigate to url
            await page.goto('https://demoblaze.com/');
          
         });
       
         Given('user clicks on login link', async function () {
            //click on login link
            await page.click('#login2');
          
         });
    
         When('user enters valid username as {string}', async function (username) {
            await page.fill('#loginusername', username);
        });

        When('user enters valid password as {string}', async function (password) {
            await page.fill('#loginpassword', password);
        });

    When('user clicks on the Samsung galaxy s6 link', async function () {
        await page.locator('a:has-text("Samsung galaxy s6")').click();
          
         });
    When('user clicks on add to cart button', async function () {
        await page.click('text=Add to cart');
           
         });

    Then('item should be added to the cart', async function () {
        await page.on('dialog', async dialog => {
            console.log(dialog.message());
            await dialog.accept();
        });
         });
       