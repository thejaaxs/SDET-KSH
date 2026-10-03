// Typescript Fundamentals
// 1. A constant `BASE_URL` set to "https://the-internet.herokuapp.com"
// 2. A let variable `retryCount` set to 3
// 3. A variable `isHeadless` set to true
// 4. A variable `testName` that can be string OR null
// 5. An array `browsers` containing "chromium", "firefox", "webkit"
// 6. A tuple `viewport` with width (number) and height (number) → [1920, 1080]
var BASE_URL = "https://the-internet.herokuapp.com";
var retryCount = 3;
var isHeadless = true;
var testName = "Practical";
testName = null;
var browsers = ["Chromium", "Safari", "Firefox", "Webkit"];
var viewport = [1920, 1080];
console.log("BASE URL : ".concat(BASE_URL, " ").concat(typeof BASE_URL));
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
