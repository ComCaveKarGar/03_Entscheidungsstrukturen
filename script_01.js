"use strict";

/*Entscheidungsstrukturen | control flow */

// Deklaration + Assignment

const ageJohn = 30;
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

// Variante 1
// if(true)
// if(false)
// if(ageJohn > ageMark)
// if(isJohnOlder)
// {
// console.log("John ist älter")
// }

// if(isJohnYounger)
// {
// console.log("John ist jünger")
// }
//////////////////////////////////////////////
// if(isJohnEqual)
// {
// console.log("John und Mark sind gleich alt")
// }
// Variante 2 mit else
//////////////////////////////////////////////


/************ IF - ELSE  ************/
// mit Alternative  
// entweder ja oder nein

// if(true)
// if(false)
// if(isJohnOlder)
// if(ageJohn > ageMark)


// // if (condition) 
// {
//     console.log("John ist älter")    
// } 
// else 
// {
//     console.log("John ist jünger")
// }

/************  Ternäre (ternary) Schreibweise ************/

console.log( (isJohnOlder) ? "John is older" : "Mark is older");
