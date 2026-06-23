import {test} from '@playwright/test'

test('Multi Select',async({page})=>{
    await page.goto('https://www.testautomationcentral.com/demo/dropdown.html');
    await page.click('[data-target="multi-select-dropdown"]');
    await page.selectOption('[class="form-multiselect block w-full mt-1"]',['Option 3','Option 1','Option 4']);
    await page.waitForTimeout(4000);
})