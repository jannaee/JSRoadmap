//Get the sum of all even numbers 
//less than the variable max passed into the function

const arr = [1, 2, 3, 5, 8, 13, 21, 34, 55, 89];

//reduce array to even numbers
const evenNums = arr.filter(function (num){return ((num %2)===0)})
console.log(evenNums);


