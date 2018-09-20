// //
// var orders = [
//     { amount: 250 },
//     { amount: 400 },
//     { amount: 100 },
//     { amount: 325 }
// ]


// //Use the map method 
// var total = orders.reduce((sum, order) => sum + order.amount, 0);
// console.log(total)


// //written with standard function keyword
// var total = orders.reduce(function (sum, order){
//     return sum + order.amount
// }, 0)

// console.log(total)

import fs from 'fs'

var output = fs.readFileSync('reducedata.txt');

console.log('output', output);


//higher order functions and composing with other HOF
//Using reduce to turn a block of data into an array

//first import data