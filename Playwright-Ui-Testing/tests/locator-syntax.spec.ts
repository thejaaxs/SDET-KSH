// Locator Syntax Rules 
import { test } from '@playwright/test'

test.beforeEach('Locator Rules', async ({ page }) => {
    await page.goto('https://playground.bondaracademy.com/')
    await page.getByText("Forms").click();
    await page.getByText('Form Layouts').click();
})

test.only('User Visible Locators', async ({ page }) => {
    await page.getByRole('button', { name: 'Sign in ' }).click()
})