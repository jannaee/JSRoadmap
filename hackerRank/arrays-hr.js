function hourglassSum(arr) {
    //My Directions for code
        //Flatten the 2D array into a 1D array 
            //enter into array and loop through the values
            //store into a new var named flatArr
        //Go through array, and push the first three values to a arr1
            //skip the next four values
                //Collect 1 value and push to arr1
                    //skip the next 4 values 
        let result = [];
        for (var i in arr){
        //go into first array, the main 2D array returns item as single array
               result = result.concat(arr[i]);
        }
        
        console.log(result);
                return result;
    
}// end of hourglassSum

    hourglassSum([ 1,
        1,
        1,
        0,
        0,
        0,
        0,
        1,
        0,
        0,
        0,
        0,
        1,
        1,
        1,
        0,
        0,
        0,
        0,
        0,
        2,
        4,
        4,
        0,
        0,
        0,
        0,
        2,
        0,
        0,
        0,
        0,
        1,
        2,
        4,
        0 ]);