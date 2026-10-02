// Class & Methods

import { customerDetails } from "../Helpers/printHelper.js"
import { subjectName } from "../Helpers/printHelper.js"

let detailsOfCustomer = new customerDetails();
detailsOfCustomer.printFirstName("Yashas")
detailsOfCustomer.printLastName("Shetty")

// We can use the instance of the class !

subjectName.printFirstLanguage("English")
subjectName.printSecondLanguage("Kannada")
subjectName.printThirdLanguage("Hindi")

