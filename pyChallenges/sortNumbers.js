// Code goes here
//write a function that takes a list of numbers
//and stores its value in 'var numbers'
//return the largest number
//if there are no numbers in the list 'return 0'


let numbers = [7, 2, 6, 3, 0]
if (numbers.includes(0)) {
  alert(`i have a 0`);
} else {
  function solution() {
    let newNum = numbers.sort();
    var finalVal = newNum.pop();
    alert(newNum);
    //2,3,6,7
    alert(finalVal);
    return finalVal;
  }
}

solution();