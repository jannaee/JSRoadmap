//find the sum of all numbers within a range

//input will be an array
//output will be the sum of all numbers

function sumOfRange(arr){
    let max = Math.max(...arr);  //8
    let min = Math.min(...arr); //4
    let total = 0;

    for (var i = min;  i <= max; i++){
        //console.log(i)
        total += i;
        console.log(total)//once total is larger than the total maxs step out of the code and return the total 
    }
    return total;
  }
  
  
  sumOfRange([1,4]);