// TODO:
// 1. Create an array of test result objects:
//    [{ name: "login test", passed: true, duration: 1200 },
//     { name: "signup test", passed: false, duration: 3400 },
//     { name: "checkout test", passed: true, duration: 2100 }]

// 2. Write a function getFailedTests that filters and returns only failed tests
// 3. Write a function getTotalDuration that returns the sum of all durations
// 4. Write a function formatResult that takes a test result and returns:
//    "✅ login test (1.2s)" or "❌ signup test (3.4s)"
// 5. Use .map() to create an array of formatted strings and log them

interface TestResult {
    name: string
    passed: boolean
    duration: number
}

let testResults: TestResult[] = [
    { name: "login test", passed: true, duration: 1200 },
    { name: "signup test", passed: false, duration: 3400 },
    { name: "checkout test", passed: true, duration: 2100 }
]

function getFailedTests(results: TestResult[]): TestResult[] {
    return results.filter((test) => !test.passed)
}

function getTotalDuration(results: TestResult[]): number {
    return results.reduce((sum, test) => sum + test.duration, 0)
}

function formatResult(test: TestResult): string {
    const icon = test.passed ? "✅" : "❌"
    const seconds = (test.duration / 1000).toFixed(1)
    return `${icon} ${test.name} ${(seconds)} `
}

let formattedResults: string[] = testResults.map(formatResult)

formattedResults.forEach((test) => console.log(test))

let failedResult = getFailedTests(testResults)
console.log(`Failed Tests : ${failedResult.map((t) => t.name).join(", ")}`)

console.log(`Total Duration : ${getTotalDuration(testResults)}Ms`)