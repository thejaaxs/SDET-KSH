// Typescript Fundamentals

// 1. A constant `BASE_URL` set to "https://the-internet.herokuapp.com"
// 2. A let variable `retryCount` set to 3
// 3. A variable `isHeadless` set to true
// 4. A variable `testName` that can be string OR null
// 5. An array `browsers` containing "chromium", "firefox", "webkit"
// 6. A tuple `viewport` with width (number) and height (number) → [1920, 1080]

const BASE_URL: string = "https://the-internet.herokuapp.com";

let retryCount: number = 3

let isHeadless: boolean = true

let testName: string | null = "Practical"
testName = null

let browsers: string[] = ["Chromium", "Safari", "Firefox", "Webkit"]

let viewport: [number, number] = [1920, 1080]

console.log(`BASE URL : ${BASE_URL} || ${typeof BASE_URL}`)
console.log(`Retry Count : ${retryCount} || ${typeof retryCount}`)
console.log(`isHeadless : ${isHeadless} || ${typeof isHeadless}`)
console.log(`Testname : ${testName} || ${typeof testName}`)
console.log(`Browsers : ${browsers} || ${typeof browsers}`)
console.log(`Viewport : ${viewport} ${typeof viewport}`)

// TODO: Create an interface TestConfig with:
//   - browser: string
//   - headless: boolean
//   - viewport: { width: number; height: number }
//   - retries?: number  (optional)
//   - baseURL: string

// Create an object config that implements TestConfig
// Create a function printConfig(config: TestConfig): void that logs each property

// BONUS: Create a type BrowserType = "chromium" | "firefox" | "webkit"
// and use it instead of string for the browser property

type browserType = "Chromium" | "Safari" | "Webkit" // Values should be these 3 values only !
/**
 * This is a interface !
 */
interface TestConfig {
    browser: browserType
    headless: boolean
    viewport: { width: number, height: number }
    retries?: number
    baseURL: string

}

/**
 * Typescript will throw error if something is missing or wrong 
 */
let config: TestConfig = {
    browser: "Chromium",
    headless: true,
    viewport: { width: 1000, height: 1000 },
    retries: 2,
    baseURL: "https://the-internet.herokuapp.com"
}

function printConfig(config: TestConfig): void {
    console.log(`Browser : ${config.browser}`)
    console.log(`Headless : ${config.headless}`)
    console.log(`Viewport : ${config.viewport.width} || ${config.viewport.height}`)
    console.log(`Retries : ${config.retries}`)
    console.log(`BaseURL : ${config.baseURL}`)
}

printConfig(config);