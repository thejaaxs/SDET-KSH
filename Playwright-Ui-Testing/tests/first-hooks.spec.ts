// Usage Of Hooks !

import { test } from '@playwright/test'

test.beforeAll(async ({ page }) => {

})

test.beforeEach(async ({ page }) => {
    await page.goto('https://playground.bondaracademy.com')
    await page.getByText('Forms').click()
})


test('Form Layouts', async ({ page }) => {
    await page.getByText('Form Layouts').click()
})

test('Date Picker', async ({ page }) => {
    await page.getByText('Datepicker').click()
})