var http = require('http');
var fs = require('fs');
http.createServer(function (req, res) {
  fs.readFile('reducedata.txt', function(err, data) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(data);
    res.end();
  });
}).listen(8282);

//higher order functions and composing with other HOF
//Using reduce to turn a block of data into an array

//first import data











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