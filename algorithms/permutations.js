//Determine if two strings are a permutation of each other


function isPermutation(str1, str2) {
    //split strings into substrings
    let newStr1 = str1.split('').sort().join('');
    let newStr2 = str2.split('').sort().join('');
    if (newStr1 === newStr2){
        console.log('true');
        return true
    } 
    console.log('false')
    return false
}



//test cases 

isPermutation('foot', 'toof')