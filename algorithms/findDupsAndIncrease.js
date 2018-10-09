// Given an array, you must increment any duplicate elements until all of its elements are unique. In addition, the sum of its elements must be the smallest possible total. For example, if arr = [3,2,1,2,7], then arrUnique=[3,2,1,4,7] and its elements sum to a minimal value of 3 +2+1+4+7 = 17.

// Complete the getMinimumUniqueSum Functin in the editor below to create an array of unique elements with a minimal sum. Return the interger sum of the resulting array.


function getMinimumUniqueSum(arrayOfNumbers) {
  let modifiedArr = [];
  let arrUnique = arrayOfNumbers.filter(//filter is not mutating the array so the duplicated numbers that I plan to increment will still be there. I need to delete them
    function (currentValue, index, thisArr) {
      return index !== thisArr.indexOf(currentValue);
      //found dupplicates
    }
    arr
    );
  //end of filtering for duplicates
  //return arrUnique
  if (arrUnique !== []) {
    modifiedArr = arrUnique.map(function (elem, i) {

      return elem + 1

    })
    console.log(modifiedArr)

    return arrayOfNumbers.push(modifiedArr);
    //   // this takes the extracted duplicate out of the function and increment it
    //   //now i need to take this number and pass add it to the original array and redo the test
  }

  return `results are ${arrUnique}`
  // } //increment the result

}
//Test Case
getMinimumUniqueSum([3, 2, 1, 2, 7, 1]);
