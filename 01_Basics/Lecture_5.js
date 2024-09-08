"use strict"; // treat all JS code as newer version

/*code readability should be high */
/* Datatypes
   Number = 2 to power 53
   bigint
   string = ""
   boolean = true/false
   null = standalone value
   undefined
   symbol = for finding the uniqueness from the other symbols

   objects
*/

// console.log(typeof undefined); // undefined
// console.log(typeof null); // object


// **************** Datatypes ****************** //
//Primitives
// 7 types : String, Number, Boolean, null, undefined, Symbol,BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);

// Non-Primitives (Reference type)
// Array, Objects, Functions

const heros = ["shaktiman","naagraj","daga"]; // Array

let myObj = {
   name: "hitesh",
   age: 22,
}

const myFunction = function(){
   console.log("Hello World");
}

console.log(typeof myObj);
console.log(typeof (myFunction));
