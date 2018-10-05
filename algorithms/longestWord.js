//Given a String find the length of the longest word in the string
//Will use For loop, conditional statement, string.split() method 

var saying = 'the quick brown fox jumped over the lazy old dog';

function longestWord(testCase){
    //turn into an array
     let arr = testCase.split(' ');
     //declare a value to store the longestWord
     let theLongestWordFound;
    //test if the last string's length is equal to the first string's length
    //if it is return false
    for(var i = 0; i < testCase.length; i++){
        //compare the current's length to the value of the final length
        if(arr.length[i] ==  arr[arr.length-1]) return false;
    }
    
}

longestWord(saying);