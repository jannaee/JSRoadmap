//Get the sum of all even numbers 
//less than the variable max passed into the function
const arr = [1, 2, 3, 5, 8, 13, 21, 34, 55, 89];

//reduce array to even numbers
function checkLastVal(max){
    const lastArrVal = arr[9];
    if (max >= lastArrVal) {
        let evenArray = arr.filter((number %2 ===0));
        console.log(evenArray);
        alert(`${max} is greater than the last number of the arr`);
    } else {
        console.log()
    }
        
}

checkLastVal(109)
const even = arr.reduce((accumulator, currentValue)=> accumulator + currentValue)

function checkArray(max){
    arr.filter((max % 2) === 0);
    console.log(usersNum);
    //console.log(arr.filter(usersNum > this))

}

checkArray(4);
    //filter the array to get a new array with all the even numbers less than the value of max
    //reduce to 