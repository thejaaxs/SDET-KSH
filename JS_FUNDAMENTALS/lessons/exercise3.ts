// TODO: Create a class TestReporter with:
//   - private property: results (array of { name: string, status: "pass"|"fail", duration: number })
//   - constructor that initializes empty results
//   - method: addResult(name, status, duration)
//   - method: getSummary() → returns { total, passed, failed, avgDuration }
//   - method: printReport() → logs a formatted report

// Instantiate it, add 5 test results, and print the report

type TestStatus = "pass" | "fail"

interface ResultRecords {
    name: string;
    status: TestStatus;
    duration: number
}

interface SummaryReport {
    total: number,
    passed: number,
    failed: number,
    avgDuration: number
}

class TestReporter {
    private results: ResultRecords[];
    /**
     * Always initialize the array to avoide runtime error
     */
    constructor() {
        this.results = []
    }

    addResult(name: string, status: TestStatus, duration: number): void {
        this.results.push({ name, status, duration });
    }

    getSummary(): SummaryReport {
        let total = this.results.length;
        let passed = this.results.filter((r) => r.status === "pass").length;
        let failed = total - passed;
        let avgDuration =
            total > 0 ? Math.round(this.results.reduce((s, r) => s + r.duration, 0) / total) : 0
        return { total, passed, failed, avgDuration };
    }

    printReport(): void {

        const { total, passed, failed, avgDuration } = this.getSummary();
        this.results.forEach((r) => {
            const icon = r.status === "pass" ? "✅" : "❌";
            const secs = (r.duration / 1000).toFixed(1)
            const label = `${icon} ${r.name}`.padEnd(30)
            console.log(`${label} ${secs}Ms`)
        })

        console.log(`Total : $String(total).padEnd(30)}`)
        console.log(`Passed : ${String(passed).padEnd(30)}`)
        console.log(`Failed : ${String(failed).padEnd(30)}`)
        console.log(`Average Duration : ${String(avgDuration).padEnd(30)}`)

    }
}



const reporter = new TestReporter();

reporter.addResult("login test", "pass", 1200)
reporter.addResult("signup test", "fail", 3400)
reporter.addResult("checkout test", "pass", 2100);
reporter.addResult("profile test", "pass", 980);
reporter.addResult("search test", "fail", 4500);

reporter.printReport();
