import {test} from '@playwright/test'

test('Drop_Down',async({page})=>{
    await page.goto('https://www.amazon.in/');
    await page.selectOption('#searchDropdownBox','Books');
    await page.waitForTimeout(4000);

})

test('Mouse action',async({page})=>{
    // await page.goto('https://demoqa.com/buttons')
    // await page.locator('#doubleClickBtn').dblclick();
    // await page.waitForTimeout(4000);
    // await page.locator('#rightClickBtn').click({button:'right'})
    // await page.waitForTimeout(4000);
    // await page.locator('[class="text-center"]').click({button:'right'})
    // await page.waitForTimeout(4000)
    // await page.goto('https://www.amazon.in');
    // await page.locator('#nav-link-accountList-nav-line-1').hover();
    // await page.mouse.wheel(0,1500);
    // await page.waitForTimeout(4000);

    await page.goto('https://jqueryui.com/droppable/');
    //source.dragto(target)
    const frame = await page.frameLocator('.demo-frame');
    await frame.locator('#draggable').dragTo(await frame.locator('#droppable'));
    await page.waitForTimeout(4000)
})