// In Typescript, we cannot change the Data Type

var customerFirstName: string = "Thanesh"
var customerLastName: string = "Kumar"
var customerAge: number = 20

type Customer = { firstName: string, lastName: string, active: boolean }

// The data should be same no more or less is available !

var customer1: Customer = {
    firstName: "Ramesha",
    lastName: "Kulal",
    active: true
}