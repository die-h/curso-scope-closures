// Reasignacion Redeclaracion 

// Var
var firstName; // Declaracion - toma por valor Undefined
firstName = "Oscar"; //Asignación
console.log(firstName);

var lastName = "David"; // Declaracion y asignacion
lastName = "Ana"; // Reasignacion
console.log(lastName);

var secondName = "David"; // Declaracion y asignacion
var secondName = "Ana"; // Redeclaracion y reasignacion
console.log(secondName);

// Let
let fruit = "Apple";
fruit = "Kiwi";
// let fruit = "Banana"; X => No se puede redeclarar variables con block scope
console.log(fruit);

// Const
const animal = "dog"; // Declaracion y asignacion
animal = "cat"; // X => No se puede reasignar variables const

const vehicles = [];
vehicles.push("Car");
console.log(vehicles);

vehicles.pop();
console.log(vehicles);
