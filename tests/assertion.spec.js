import {test, expect} from '@playwright/test'

test('Assertion',async({page})=>{

    await page.goto('https://demoqa.com/text-box');
    await expect(page).toHaveURL('https://demoqa.com/text-box');
    await expect(page).toHaveTitle('demosite')
    // await expect(page.getByRole('button',{name:'Submit'})).not.toBeVisible();
    // await expect(page.getByRole('button',{name:'Submit'})).toBeVisible();
    await page.pause();
    await expect(page.getByRole('button',{name:'Submit'})).toBeEnabled();
    await expect(page.getByRole('button',{name:'Submit'})).not.toBeDisabled();

    await expect(page.locator('#userName-label')).toHaveText('Full Name')
    await expect(page.getByText('Current Address')).toContainText('Address')

})