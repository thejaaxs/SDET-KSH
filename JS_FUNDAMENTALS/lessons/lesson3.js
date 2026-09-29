// Objects 

var customer = {
    firstName: "John",
    lastName: "Smith",
    cars: ["Audi", "Hummer", "Aston Martin"]
}

console.log(customer)
// To print the only firstName of the object
console.log(customer.firstName)

// Dot Notation 
customer.firstName = "Keerthan"
console.log(customer.firstName)

console.log(`${customer.lastName}`)

// Bracket Notation
customer['lastName'] = "Shetty"
console.log(customer['lastName'])

console.log(`${customer['firstName']}`)

// Arrays

var car = ["Volvo", "BMW", "Audi"]

console.log(car)

car[1] = "Toyota"

console.log(car)
console.log(car[0])
console.log(customer.cars[0])