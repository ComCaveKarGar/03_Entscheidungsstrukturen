"use strict";

/*Entscheidungsstrukturen | control flow */

// Deklaration + Assignment

const ageJohn = 29;
const ageMark = 30;

// Deklaration

let isJohnOlder, isJohnEqual, isJohnYounger;

// Test | Logische Aussage
isJohnYounger = (ageJohn < ageMark)
isJohnOlder = (ageJohn > ageMark);
isJohnEqual = (ageJohn == ageMark);

// Ausgabe
console.log("ageJohn: " + ageJohn);
console.log("ageMark: " + ageMark);
console.log("isJohnOlder: " + isJohnOlder);
console.log("isJohnEqual: " + isJohnEqual);
console.log("----------------------------");

/************ IF  ************/
// TINA --> There is no alternative!
// entweder JA oder nix ... alternativlos
// Türsteher-Politik (Doors 10 p.m.)

// if(true)
// if(false)

// if(isJohnOlder)
// {
// console.log("John ist älter")
// }

// if(isJohnYounger)
// {
// console.log("John ist jünger")
// }
