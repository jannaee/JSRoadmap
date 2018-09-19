//The most prevelant pattern usef for keeping code independent of other components
//Supports loose coupling,  the best advantage is encapsulation or ability to protect states and behaviors
//The  module pattern allows for publlic and private as well as protected and privileged access levels

//AN IIFE module - Immediately invoked function Expression - that allows for private scoping

//step 1 create the IIFE Module
// (function (){
//     //declare private variables and or functions

//     return {
//         //declare public variables and/or functions
//     }

// })();


//Step 2 instantiate the private variables/or functions

//Step 3 Return the object

//Example provided by tutorial on https://scotch.io/bar-talk/4-javascript-design-patterns-you-should-know



//Applying what I've learned to my own Module

//A working example of a factory that creates pies
//create a pie based off of the crust type, the fillings, and add a cost to them

// var pieFactory = (function (){
//     //private variables
//     var fillings = ['', '', '',  ]

// })()

