import { test } from '@playwright/test'

test.describe.skip('First Describe', () => {
    test('First Test', () => {

    })

    test('Second Test', () => {

    })

    test('Third Test', () => {

    })
})


/**
 * Promise will have 2 types , resolve and rejected ( resolve -> Executed successfully && reject -> Failed !)
 */
test.describe.skip("Second Describe", () => {
    test("First Test", () => {

    })
    test('Second Test', () => {

    })

    test('Third Test', () => {

    })
})

/**
 * First Test Pass 1
 */

test('First Test', async ({ page }) => {
    await page.goto('https://playground.bondaracademy.com/')
    await page.getByText('Forms').click()
    await page.getByText('Form Layouts').click()
})

test('Second Test For Date Picker', async ({ page }) => {
    await page.goto('https://playground.bondaracademy.com/')
    await page.getByText('Forms').click()
    await page.getByText('Datepicker').click()
})