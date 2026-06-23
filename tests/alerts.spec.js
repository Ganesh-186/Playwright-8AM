import {test} from '@playwright/test';

test('JS Alerts handling',async({page})=>{
    await page.goto('https://the-internet.herokuapp.com/javascript_alerts');
    page.on('dialog',(d)=>{  
        console.log(d.message());
        console.log(d.type());
        if(d.type()=='alert'){
            d.accept()
        }
        else if(d.type()=='confirm'){
            d.accept()
        }
        else if(d.type()=='prompt'){
            d.accept('Ganesh')
        }
    })
    await page.locator('//button[text()="Click for JS Alert"]').click()
    await page.locator('//button[text()="Click for JS Confirm"]').click()
    await page.locator('//button[text()="Click for JS Prompt"]').click()
    await page.waitForTimeout(4000)
})

test('DOM popup',async({page})=>{
    await page.goto('https://www.flipkart.com/');
    try{
        await page.waitForSelector('.b3wTlE',{timeout:5000})
        await page.locator('.b3wTlE').click()
    }
    catch{
        console.log('Popup not appeared')
    }
})


test('window handling',async({browser})=>{
    const context = await browser.newContext();
    const page = await context.newPage();
    await page.goto('https://www.flipkart.com');
    await page.locator('(//input[@name="q"])[1]').fill('iphone 17');
    await page.locator('(//input[@name="q"])[1]').press('Enter');
    const [newtab] = await Promise.all([
        context.waitForEvent('page'),
        page.click("//div[contains(text(),'Apple iPhone 17 (Black, 256 GB)')]")
    ]);
    await newtab.waitForLoadState();
    console.log(await newtab.title());


})

test('window handling with switching btwn tabs and context',async({browser})=>{
    const context = await browser.newContext();
    const context2 = await browser.newContext();

    const page = await context.newPage();
    const page2 = await context2.newPage();

    await page.goto('https://www.flipkart.com');
    await page.locator('(//input[@name="q"])[1]').fill('iphone 17');
    await page.locator('(//input[@name="q"])[1]').press('Enter');
    const [newtab] = await Promise.all([
        context.waitForEvent('page'),
        page.click("//div[contains(text(),'Apple iPhone 17 (Black, 256 GB)')]")
    ]);
    await newtab.waitForLoadState();
    console.log(await newtab.title());
    const [newtab_2] = await Promise.all([
        context.waitForEvent('page'),
        page.click("//div[contains(text(),'Apple iPhone 17 (Black, 256 GB)')]")
    ]);
    await newtab_2.waitForLoadState();
    console.log(await newtab_2.title());
    await page.bringToFront();
    await page.waitForTimeout(4000)
    await newtab_2.bringToFront();
    
    await page2.goto('https://www.amazon.in')
    await page2.waitForTimeout(4000)

})