// Loops !

// for (statement - 1; statement - 2; statement3) {
//     console.log(statement)
// }

// for loop (for i loop)
for (let i = 0; i <= 10; i++) {
    console.log("Hello World: " + i)
}

var cars = ["Volvo", "Toyota", "Maserati"]
for (let car of cars) {
    console.log(car)
    if (car == "Toyota")
        break;
}

// ES6 Syntax For For Loop !

cars.forEach(car => {
    console.log(car)
})