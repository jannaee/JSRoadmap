//find the sum of all numbers within a range

//input will be an array
//output will be the sum of all numbers

function sumNum(testCase){
    if (typeof testCase === 'string'){
        console.log(`is a string`);
        return
    } else if (Array.isArray(testCase) === true ) {
        console.log(`is array`)
        let strConversion = testCase.join();
        alert(strConversion);
        console.log(largestNum);

        return
    } else {
        console.log(`neither a string or array`)
        return
    }

}


sumNum([4,7,5,2,8,3])
// sumNum(['stest'])
// sumNum(true)
