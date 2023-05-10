"use strict";

/*Entscheidungsstrukturen | control flow */

// Deklaration + Assignment

// const ageJohn = 30;
// const ageMark = 30;

// // Deklaration

// let isJohnOlder, isJohnEqual, isJohnYounger;

// // Test | Logische Aussage
// isJohnYounger = (ageJohn < ageMark)
// isJohnOlder = (ageJohn > ageMark);
// isJohnEqual = (ageJohn == ageMark);

// // Ausgabe
// console.log("ageJohn: " + ageJohn);
// console.log("ageMark: " + ageMark);
// console.log("isJohnOlder: " + isJohnOlder);
// console.log("isJohnEqual: " + isJohnEqual);
// console.log("----------------------------");

// /************ IF  ************/
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
//
/************  Ternäre (ternary) Schreibweise ************/

// console.log( (isJohnOlder) ? "John is older" : "Mark is older");


/************ IF - ELSE IF  ************/
// mit alternativen Fällen (älter, jünger, gleich alt)

// if(isJohnOlder) // 1. Test

// {
//     console.log("John ist älter")    
// } 
// else if(isJohnEqual) // 2. Tesst

// {
//     console.log("John ist gleich alt")    
// } 
// else // 3. Test (Wenn alle vorigen Tests fehlschlagen)
// {
//     console.log("John ist jünger")
// }

/****** Fallunterscheidung / SWITCH|CASE 1 ******/

const firstName = "Jane";
let job;

job = "driver";  // .. fährt TAXI! / UBER
job = "diver"; // .. taucht
job = "artist"; // .. malt ein Bild
job = "teacher"; // .. unterrichtet
job = "instructor"; // ..  unterrichtet
// job = "drugdealer"; // .. macht etwas Anderes (default)

switch (job) 
{
    case "driver": //(== (test auf Gleichheit)
        console.log(firstName + " fährt TAXI!");
        break;
    case "diver": //(== (test auf Gleichheit)
        console.log(firstName + " taucht");
        break;
    case "artist": //(== (test auf Gleichheit)
        console.log(firstName + " malt ein Bild");
        break;
    case "teacher": //(== (test auf Gleichheit)
    case "instructor": //(== (test auf Gleichheit)
        console.log(firstName + " unterrichtet");
        break;

    default:     
        console.log(firstName + "  macht etwas Anderes")
        break;
}