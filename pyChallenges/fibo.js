//The Fibonacci Sequece is a sequence of numbers where each number
// is the sum of the two numbers previous where the first two numbers are 1 and 2
//The first 10 numbers are  [1, 2, 3, 5, 8, 13, 21, 34, 55, 89]
//Original Question: Write a function that takes a number, max, 
//and returns the sum of all the even Fibonacci numbers less than max

//TO DO: Get the sum of all even numbers 
//less than the variable max passed into the function

const arr = [1, 2, 3, 5, 8, 13, 21, 34, 55, 89];
//reduce array to even numbers
const evenNums = arr.filter(function (num){return ((num %2)===0)}) //filters for all even numbers

//sums of values of even numbers according to how much max is
let greaterThan34 = evenNums.reduce(function (accumulator, currentValue) {return accumulator + currentValue});
let greaterThan8 = arr[1]+arr[4];
let greaterThan2 = arr[1];


function solution (max){
    if( max >= arr[7]){
        alert(`Your answer is: ${greaterThan34} because your input of: ${max} is greater than or equal to 34`);

    } else if (max >= greaterThan8) {
        alert(`Your answer is: ${greaterThan8} because your input of: ${max} is greater than 8`)
    } else if (max >= greaterThan2 ){
        alert(`Your answer is ${greaterThan2} because your input of: ${max} is greater than or equal to 2`)
    } else {
        alert(`Your input of: ${max} is less than the lowest even value in the array, therefore nothing to return`)
        //this will just be a return
    }
}

//Test cases with expected output
solution(200); //Your answer is: 44 because your input of: 200 is greater than 34
solution(-1);  //Your input is less than the lowest even value in the array, therefore nothing to return
solution(15);  //Your answer is: 10 because your input is greater than 8
solution(1);   //Your input is less than the lowest even value in the array, therefore nothing to return
solution(2);
solution(8);
solution(34);