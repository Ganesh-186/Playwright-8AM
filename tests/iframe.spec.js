import {expect, test} from '@playwright/test'

test('frame',async({page})=>{
    await page.goto('https://www.globalsqa.com/demo-site/frames-and-windows/#iFrame')
    const frame = await page.frameLocator('[name="globalSqa"]')
    await frame.locator('//h3[text()="Selenium 3.0 Training"]').click()
    await page.waitForTimeout(4000)
})

test('Upload',async({page})=>{
    // await page.goto('https://demoqa.com/upload-download');
    
    // await page.setInputFiles('[label="Select a File"]','C:/Users/ganes/Downloads/data_attachments_dddd308a9ad198ea.png');
    // await page.waitForTimeout(4000);
    // await page.setInputFiles('[label="Select a File"]',[])
    // await page.waitForTimeout(4000)

    // await page.goto("https://www.file.io/");
    // await page.setInputFiles('[class="css-zpjtsm e12cce780"]',['./flipkart page.png','./package-lock.json','C:/Users/ganes/Downloads/data_attachments_dddd308a9ad198ea.png',"C:/Users/ganes/Downloads/MANUAL TESTING.txt"]);
    // await page.waitForTimeout(5000)

    await page.goto('https://demoqa.com/upload-download');

    const [Download]=await Promise.all([
        page.waitForEvent('download'),
        page.locator('#downloadButton').click()
        
    ])
    await Download.saveAs('C:/Users/ganes/OneDrive/Pictures/Image.png')

})


test('keyboard action',async({page})=>{
    await page.goto('https://www.amazon.in');
    await page.getByPlaceholder('Search Amazon').type('Lenovo Laptop',{delay:1000});
    await page.getByPlaceholder('Search Amazon').press('Control+A');
    await page.waitForTimeout(4000);
    await page.getByPlaceholder('Search Amazon').press('Control+X')
    await page.waitForTimeout(4000);
    await page.getByPlaceholder('Search Amazon').press('Control+V')
    await page.waitForTimeout(4000);
    await page.keyboard.press('Enter');
    await page.click();
})