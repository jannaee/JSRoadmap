//array of numbers to be sorted
let numbers = [7, 2, 6, 3].sort(function(a, b){return b-a});
//function that sorts the array
//loops through and 
//return the first item because it will be the biggest

function solution(numbers){
    if (!Array.isArray(numbers) || !numbers.length) {
 	    return 0;
    } else {
        return numbers[0]
    }

}

solution(numbers);




solution for 3
var arr = [1, 2, 3, 5, 8, 13, 21, 34, 55, 89];

function solution(max){
  return max.filter(function(val){return val%2===0})
}

alert(even(arr));




var person = {
firstname:'jannaee' ,
lastname: 'sick',
speak:function(){
	alert(`My name is ${this.firstname} and I'm mastering this shit`);
   }
}

person.speak()
undefined
var person = {
firstname:'jannaee' ,
lastname: 'sick',
speak:function(cb){
	alert(`My name is ${this.firstname} and I'm mastering this shit + ${cb}`);
   }
}

person.speak('hello')
undefined
var person = {
firstname:'jannaee' ,
lastname: 'sick',
speak: function(cb){
	alert(`My name is ${this.firstname} and I'm mastering this shit +`);
   cb();
}
}

person.speak(function(){
 alert(`OMG`)!
})
VM508:11 Uncaught SyntaxError: Unexpected token !
var person = {
firstname:'jannaee' ,
lastname: 'sick',
speak: function(cb){
	alert(`My name is ${this.firstname} and I'm mastering this shit +`);
   cb();
}
}

person.speak(function(){
 alert(`OMG`)
})
undefined
var person = {
firstname:'jannaee' ,
lastname: 'sick',
speak: function(){
	alert(`My name is ${this.firstname} and I'm mastering this shit +`);
   cb();
}
}

person.speak(function(){
 alert(`OMG`)
})
VM514:6 Uncaught ReferenceError: cb is not defined
    at Object.speak (<anonymous>:6:4)
    at <anonymous>:10:8
speak @ VM514:6
(anonymous) @ VM514:10
var person = {
firstname:'jannaee' ,
lastname: 'sick',
speak: function(){
	alert(`My name is ${this.firstname} and I'm mastering this shit +`);

function whatHappens(){
	alert('what happens now')
}
   
}
}

person.speak()
undefined