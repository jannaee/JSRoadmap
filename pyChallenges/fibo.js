//Get the sum of all even numbers 
//less than the variable max passed into the function

const arr = [1, 2, 3, 5, 8, 13, 21, 34, 55, 89];
//reduce array to even numbers
const evenNums = arr.filter(function (num){return ((num %2)===0)}) //filters for all even numbers
let greaterThan34 = evenNums.reduce(function (accumulator, currentValue) {
    return accumulator + currentValue
});


function solution (max){
    if( max >= arr[7]){
        alert(`Your answer is: ${greaterThan34} because your input of: ${max} is greater than 34`);

    } else if (max > arr[4]) {
        alert(`Greater than 8`)
    } else if (max > arr[2] ){
        alert(`Greater than 2`)
    } else {
        alert(`i'm final result`)
    }
}
solution(200);