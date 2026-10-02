export function printAge(age) {
    console.log("Print Age : " + age)
}

export class customerDetails {
    printFirstName(firstName) {
        console.log("Firstname: " + firstName)
    }
    printLastName(lastName) {
        console.log("Lastname: " + lastName)
    }
}

// Exporting the class instance !

class courseDetails {
    /**
     * This will print the First Language
     * @param {string} subject1 
     */
    printFirstLanguage(subject1) {
        console.log("First Language: " + subject1)
    }
    /**
     * This will print the Second Language
     * @param {string} subject2 
     */
    printSecondLanguage(subject2) {
        {
            console.log("Second Language: " + subject2)
        }
    }
    /**
     * This will print the Third Language
     * @param {string} subject3 
     */
    printThirdLanguage(subject3) {
        console.log("Third Language: " + subject3)
    }
}

export let subjectName = new courseDetails()