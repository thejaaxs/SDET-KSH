// Logical And

console.log(true && true) // All the values has to be true for it to be true !
console.log(true && false)

// Logical OR 

console.log(true || true) // Any value has to be true, for it to be true !
console.log(false || true)
console.log(false || false)

// For Comparision !

var ageIsMoreThanEighteen = false
var isUSCitizen = true
var eligibilityForDrivingLicense = ageIsMoreThanEighteen && isUSCitizen
var eligibilityBasedOnOneIsTrue = ageIsMoreThanEighteen || isUSCitizen

console.log("The Customer is Eligible For DL : " + eligibilityForDrivingLicense)
console.log("The Customer is Eligible For : " + eligibilityBasedOnOneIsTrue)

// NOT Operator 
console.log(6 !== 10)
