
function hourglassSum(arr) {
    //Flatten the 2D array into a 1D array 
        //enter into array and loop through the values
        //store into a new var named flatArr
    //Go through array, and push the first three values to a arr1
        //skip the next four values
            //Collect 1 value and push to arr1
                //skip the next 4 values 
                //repeat until done and there is an array for each complete iteration
    
    //go into first array, the main 2D array returns item as single array    
    let oneDimensionalArray = [];
        for (var i in arr){
            oneDimensionalArray = oneDimensionalArray.concat(arr[i]);
        }
        //console.log(oneDimensionalArray);
   
    //function to push elements of an array that matches the following pattern
        //first go into the oneDimensionalArray
            //push elements 0,1,2,7,12,13,14 and sum them into "arrayTotaled"
            //loop through array and access elements +1 
                //access element index +1 (1,2,3,8,13,15)
                    //sum them
                    //store into "arrayTotaled"
                //repeat 16 times
                    
    function itemCollector(oneDimensionalArray){ 
        console.log(oneDimensionalArray);
        let newArraySet = oneDimensionalArray.map(arraySet => {console.log(arraySet)})
  
return newArraySet

    }

    

        
}// end of hourglassSum
hourglassSum( 1,        1,        1,        0,        0,        0,        0,        1,        0,        0,        0,        0,        1,        1,        1,        0,        0,        0,        0,        0,        2,        4,        4,        0,        0,        0,        0,        2,        0,        0,        0,        0,        1,        2,        4,        0 );


//basic for loop

let x = 1;    
while(x <= 16){
    console.log(`loop count is ${x}`);
    x++;
}