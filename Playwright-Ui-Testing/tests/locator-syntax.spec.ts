// Locator Syntax Rules 
import { test } from '@playwright/test'

test.beforeEach('Locator Rules', async ({ page }) => {
    await page.goto('https://playground.bondaracademy.com/')
    await page.getByText("Forms").click();
    await page.getByText('Form Layouts').click();
})

test.only('User Visible Locators', async ({ page }) => {
    await page.getByRole('button', { name: 'Sign in' }).first().click()
    await page.getByRole('textbox', { name: 'Email' }).first().click()
    await page.getByLabel('Email').first().fill('test@test.com')
    await page.getByPlaceholder('Jane Doe').fill('Arterm Bndar')
    await page.getByText('Submit').first().click()
    await page.getByTestId('inputEmail1').fill('test@test.com')
    await page.getByTitle('IoT Dashboard').click()

})