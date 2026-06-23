import {test} from '@playwright/test'

test('Drop_Down',async({page})=>{
    await page.goto('https://www.amazon.in/');
    await page.selectOption('#searchDropdownBox','Books');
    await page.waitForTimeout(4000);

})

