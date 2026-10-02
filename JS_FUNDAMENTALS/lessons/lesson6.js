// Conditional Statements 

// if (condition) {
// Execute some code !
// }
// else {
// Execute some code !
// }

// If hour is between 6 & 12, print "Good Morning" !
// If hour is between 12 & 18, print "Good Afternoon" !
// Otherwise "Good Evening" !

var hour = 16
if (hour >= 6 && hour <= 12)
    console.log("Good Morning !")
else if (hour > 12 && hour <= 18)
    console.log("Good Afternoon !")
else
    console.log("Good Evening !")

//  Driving Liscense Eligibility !

var isUsCitizen = true
var isAgeIsMoreThanEighteen = false
if (isAgeIsMoreThanEighteen && isUsCitizen)
    console.log("Eligible For The Driving Licsence !")
else
    console.log("Not Eligible For The Driving Liscense !")

