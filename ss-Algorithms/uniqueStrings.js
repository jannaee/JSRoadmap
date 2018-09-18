//Thinking like a programmer 
// Go through a string and determine if every character is a unique
 
    //examine if all characters are unique
       //if this instance is not a match to the last instance, then return false
       //however if the first and the last ar not the same then return true and exit out and return to the loop to check the next character
 function stringChecker(string){
    for (var i=0; i < string.length; i++){
       if(string.indexOf(string[i]) !== string.lastIndexOf(string[i])) 
       console.log('this string is looking unique so far' + string)
       return false;
    }
    return true;
 }
stringChecker('car');
stringChecker ('smartphone');
stringChecker ('moon');