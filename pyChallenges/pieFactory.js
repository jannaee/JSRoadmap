//You are working at a pie factory and want to pass the time. You assign a numerical value to each pie of the following
//[{type: 'Cherry', value: 1}, {type: 'Blueberry', value: 2},{type: 'Strawberry', value: 3}, {type: 'Raspberry', value: 5}, {type: 'Blackberry', value: -1}, {type: 'Apple', value: 13 }]

//Create a function that takes an array of pies, looks up their numerical value,
//and returns an array where each value in the array is the sum of itself and all the previous numbers in the array

//example [cherry, blueberry, strawberry] would equal to [1, 3, 6]
//if the array is empty they retun an empty array


//First place information into an array
const pies = [
    {type: 'Cherry', value: 1}, 
    {type: 'Blueberry', value: 2},
    {type: 'Strawberry', value: 3},
    {type: 'Raspberry', value: 5},
    {type: 'Blackberry', value: -1},
    {type: 'Apple', value: 13 }
];

//second only access the values
const pieValues = pies.filter(function(number){
    return number[1].value;
});

console.log(pieValues);

function solution (pies) {
    // Type your solution here 
    //function needs to look up value
    //return an array
    if (pies === undefined || pies.length == 0){
        return [];
    } else {
        alert(`here`);


        // valuesFromPies.reduce(function (previous, current){
        //     return previous + current
        // });

    }
};

solution();
