import {test} from '@playwright/test';

test('Table handling', async({page})=>{
    await page.goto('https://demoqa.com/webtables');
    const rows = await page.locator('table tbody tr'); //table -> tbody -> tr
    console.log(await rows.count());
    console.log(await rows.nth(1).textContent());
    // for(let i=0; i<await rows.count(); i++){

    //     // const colm = await rows.nth(i).locator('td');
    //     const colm = await rows.nth(i).allInnerTexts();
    //     console.log(colm);
        
    //     // for(let j=0; j<await colm.count();j++){
    //     //     const text = await colm.nth(j).allTextContents();
    //     //     console.log(text);
    //     // }
    // }
})

/*
i loop -> row
j loop -> data

    for(let i=0; i<await rows.count(); i++){
        const colm = await rows.nth(i).locator('td');
        for(let j=0; j<await colm.count();j++){
            await colm.nth(j).textContent();
        }
    }


    i=0 
    rows.nth
*/


test('dropdown text',async({page})=>{
    await page.goto('https://www.amazon.in');
    const option = await page.locator('#searchDropdownBox option');
    await page.waitForTimeout(4000)
    console.log(await option.count());
    const text = await option.allInnerTexts()
    console.log(text);
    // for(let i=0; i<await option.count();i++){
    //     const text = await option.nth(i).textContent();
    //     console.log(text);
    // }
})

test('dynamic table',async({page})=>{
    await page.goto('https://demoqa.com/webtables');
    const rows = await page.locator('table tbody tr');
    
    for(let i=0; i<await rows.count();i++){
        // const colms = await rows.nth(i).locator('td');
        const text = await rows.nth(i).textContent();
        console.log(text);
        if(text.includes('Vega')){
            await rows.nth(i).locator('[title="Delete"]').click();
        }

    }
    await page.waitForTimeout(4000)
})
