// TODO: 
// 1. Write an async function simulateTest(name: string, ms: number): Promise<string>
//    that waits ms milliseconds then returns "${name} completed"
//    (use: new Promise(resolve => setTimeout(resolve, ms)))

// 2. Write an async function runTestSuite() that:
//    a. Runs 3 tests sequentially using await (measure total time)
//    b. Runs the same 3 tests in parallel using Promise.all (measure total time)
//    c. Logs both total times to show the difference

// This pattern is EXACTLY how Playwright parallelism works

async function simulateTest(name: string, ms: number): Promise<string> {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(`${name} Completed`)
        }, ms)
    })
}

async function main() {
    const res = await simulateTest("Login Test", 4000)

    console.log(res)
}

main()

async function runTestSuite(): Promise<void> {
    console.log("Sequential Timing")
    let sequentialStart = Date.now()
    console.log(await simulateTest("Login Test", 1000))
    console.log(await simulateTest("Signup Test", 2000))
    console.log(await simulateTest("Checkout Test", 3000))
    let sequentialTime = Date.now() - sequentialStart
    console.log(
        `Sequential Time: ${sequentialTime} ms`
    );
    console.log("Parallel Timing");
    let parallelStart = Date.now()
    const results = await Promise.all([
        simulateTest("Login Test", 1000),
        simulateTest("Signup Test", 2000),
        simulateTest("Checkout Test", 1500)
    ]);

    results.forEach(result => console.log(result));
    let parallelTime = Date.now() - parallelStart
    console.log(
        `Parallel Time: ${parallelTime} ms`
    );
}

runTestSuite()