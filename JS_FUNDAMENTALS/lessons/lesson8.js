// Declarative Function !

function helloOne() {
    console.log("Hello One !")
}

helloOne()
// Declarative function can be declared even early !

helloTwo()
function helloTwo() {
    {
        console.log("Hello Two !")
    }
}

// Anonymus Function !
let helloThree = function () {
    console.log("Hello Three !")
}
helloThree()

// ES-6 Function !
var functionFour = () => {
    console.log("Hello Four !")
}
functionFour()

// Function With Arguments

function printName(name, lastName) {
    console.log(name + ' ' + lastName)
}

printName("Keerthan", "Marathe")

// Function With Return !

function multiplyByTwo(num) {
    return num * 2
}
console.log(multiplyByTwo(4))

// Importing Functions 

import { printAge } from "../Helpers/printHelper.js"
printAge(5)

// The Other Way to import is to import Everything !

import * as helper from "../Helpers/printHelper.js"
helper.printAge(10)