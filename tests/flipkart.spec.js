import {chromium, test} from '@playwright/test';

test('Opening flipkart',async({page})=>{
    await page.goto('https://www.flipkart.com/');

    console.log(await page.url());
    console.log(await page.title());
    await page.screenshot({path:'./flipkart page.png'});
    
})

test('browser',async()=>{
    const browser = await chromium.launch();
    const context = await browser.newContext({
        recordVideo:{
            dir:'./record/'
        }
    });
    const page = await context.newPage();
    await page.goto('https://www.flipkart.com/')
    const page2 = await context.newPage()
    await page2.goto('https://www.flipkart.com/')
})

test('Locators',async({page})=>{
    await page.goto('https://www.amazon.in/');
    await page.locator('#value').fill('text')
    await page.locator('#value').click();

})