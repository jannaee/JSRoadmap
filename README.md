#JS ROADMAP Outline was created by Zell Liew (https://zellwk.com/). I created an answer set below to test my JavaScript knowledge. 

## Phase 1

### Phase one objectives to master

#### 1. How do you declare variables?
Variables are declared using the keywords var, let, const. They can have a value set to them or not.


#### 2. What are Strings, Numbers, Booleans, Null and Undefined?
    Strings - used to store a series of characters can me any characted inside a single or double quote

    Numbers - intergers that can be written with or without decimals

    Booleans - a data type that evaluates to either true or false
    
    Null - a data type that is nothing but is actually an object, the typeof is object
        extra tip: you can empty and object by setting it to null
    
    Undefined - a variable without a value, the typeof is undefined 
        extra: any value can be emptied by setting the value to undefined

#### 3. What are Arrays, Objects and Functions?
>    Arrays - an object used to store multiple values, and uses numbers to access it's elements
~~~
Example:
    Create an array - var array_cars = ['saab', 'ford', ...]
    Access an array - var name = cars [0] (using indexing)

~~~
>    Object - is a construct that stores multiple values in a key/value pairing. it uses names to access it's members

> Functions are a logical way to store a block of code
#### 4. How to use if and else statements?
    - [ ] *

#### 5. How to compare variables?
    - [ ] *

#### 6. How to use the for loop?
> Loops are handy for when you want to execute the same block of code over and over but get different values each time. An example:

    ~~~
    
    ~~~

### Phase one testing

- [ ] 1. What are the five primitive values in JavaScript? 
    * Primitives are values with no properties
    * Null, Strings, Number, Undefined, Booleans, Symbol (ES6)

- [ ] 2. How do you declare and assign variables in JavaScript?
    * Declare variables using a keyword var let or const paired with a name
    * Assign or initialize by setting that name with a value using an '=' sign on the RHS with any of the 6 primitive values
    
- [ ] 3. What's the difference between const, let and var?
    * var is the original keyword to create variables, but has become outdated since release of ES6, but difficult to manage hoisting during scoping
    * let introcudes block scope, where the variable is only accessible within the block of code it was introduced into 
    * const it's like let, but you cannot reassign it a value
        * use to minimize mutable state
        * 

- [x] 4. What do each of the following operators do?
    1. ```+``` //add
    2. ```-``` //subtract
    3. ```*``` //multiply
    4. ```/``` //divide
    5. ```%``` //allow something to not have a remainder

- [x] 5. What do each of the following comparison operators do?

    1. ``` === ```//strict comparision, must match in type and value
    2. ```!==``` //is not equal to
    3. ```>``` //greater than
    4. ```>=``` //greater than or equal to
    5. ```<``` //less than
    6. ```<=``` //less than or equal to


- [x] 6. How do you use the following conditionals?
  1. if 
  > if (expression to evaluate to true){ code to execute if the condition is true}
  
  2. if else
  > if (condition to evaluate to true){block to return if it is}else{if condition did not turn to be true this block is exectued}
    
   3. else
   > can be used for specifying an additional condition if the first is false 
   
- [ ] 7. How do you use a for loop?
    ~~~
    for (let i = 0; i<4; i++){
        block of data to be looped through
    }
    ~~~~

- [ ] 8. What is an array?
    > Arrays is a type of object that stores a list of data in bracket notation. It's best to chose this data type with you want the element names to be numbers.

- [ ] 9. How do you put values into arrays?
    > Set it to a variable and add data in as strings or numbers surronded by brackets
    
    > You can add data into an array by identifiying the index to be replaced and setting it to a new value like below:
    ~~~
    var cars=['toyota'];
    cars[0] = 'bmw'
    console.log(cars) //bmw
    ~~~

    > You can also use the push method to put items into array:
    ~~~
    car.push('ford')
    ~~~

- [ ] 10. How to you get values out of arrays?
        
        Use bracket notation, Arrays start with a 0 index. refer to the array's name and pair it with the index you want to get, or all data by denoting the var name

- [ ]11. How do you remove a value from an array?
       > * pop or shift removes the laster and first elements of an array respectively
        ~~~
        var fruits = ['orange','kiwi', 'strawberry']
        ~~~

- [ ] 12. How do you loop through every value of an array?
    > The best way is to use a for loop:
    ~~~
        Example: 
            let fruits, 
            fruitsLength, 
            i;

            fruits = ['apple', 'starfruit', 'orange'];
            fruitsLength = fruits.length;
            for (i=0; i < fruitsLength; i++) {
                console.log( fruits[i] )
            }
    ~~~

- [ ] 13. What is an object?
> Definition: Use objects when you want elements names to be strings

* 1. How do you put values into objects?
~~~
One way is to create the object literally
    let car = {
        type: 'scion', 
        color: 'teal', 
        model:"200"
    }

Add new properties 
    car.year = "1998"; //best to use with you know the name of the property
    car[age] = "30" //best to use when you know the name of the property is dynamic
    console.log(car); 
    //
~~~

* 2. How do you get values out from objects?
~~~
    console.log(car.type); //'scion'
~~~
* 3. How do you remove a property from an object?
* 4. How do you loop through every value of an object?
    > Using ES6 a for...of loop will work
    ~~~
    Example:
        for (const key of Object.keys(obj)) {
            console.log(key, obj[key])
        }
    ~~~
    > Using ES5 a Object.keys() 
    ~~~
    Example:
        var obj = {first: "Jannaee", last:"Sick"};

        Object.keys(obj).forEach(function(key){
            console.log(key, obj[key]);
        });
    ~~~
* 5. What is a method on an object?
* 6. How do you de􀀍ne methods?
* 7. How do you call/invoke a method?


- [ ] 10. What is a function?
    - [ ] 1. How do you define functions?
    - [ ] 2. How do you call/invoke/execute functions?
    - [ ] 3. How do you pass arguments into a function?
    - [ ] 4. What does the return keyword do in a function?

# Phase 2

### Phase two objective to master

- [ ] 1. What are scopes and closures
- [ ] 2. What is asynchronous JavaScript
- [ ] 3. How to write asynchronous JavaScript with callbacks.
- [ ] 4. How to select elements
- [ ] 5. How to add or remove classes
- [ ] 6. How to add or remove attributes
- [ ] 7. How to add or remove elements
- [ ] 8. How to use event listeners to add interactivity
- [ ] 9. What events are there and how to use them

### Phase two testing
- [ ]1. What is the JavaScript scope?
    - [ ] 1. Why should you keep global variables to a minimum?
    - [ ] 2. What is a closure?
    - [ ] 3. Why do you use closures?

- [ ] 2. What is a callbacks
    - [ ] 1. How do you use a callback?
    - [ ] 2. How do you write a callback?
     * my example is here: https://jsfiddle.net/jsick/92b5woj3/33/

    - [ ] 3. How do you write a function that accepts a callback?
    - [ ] 4. Is setTimeout a callback-accepting function?


- [ ] 3. Asynchronous JavaScript
    - [ ] 1. What does asynchronous and synchronous JavaScript mean?
    - [ ] 2. How do you write asynchronous JavaScript?
    - [ ] 3. What is an event loop?
    - [ ] 4. How does the event loop work?

- [ ] 4. DOM methods and questions
    - [ ] 1. What is an Element?
    - [ ] 2. What is a Node?
    - [ ] 3. How do you select an Element?
    - [ ] 4. How do you select multiple Element?
    - [ ] 5. How do you loop through multiple Element for all browsers?
    - [ ] 6. How do you select the parent Element?
    - [ ] 7. How do you select sibling Elements?
    - [ ] 8. How do you select children Elements?
    - [ ] 9. How do you add a class to a Element?
    - [ ] 10. How do you remove a class from a Element?
    - [ ] 11. How do you check if a class is present on a Element?
    - [ ] 12. When should you add a class to a Element?
    - [ ] 13. How do you add an attribute to a Element?
    - [ ] 14. How do you remove an attribute from a Element?
    - [ ] 15. How do you check if an attribute is present on a Element?
    - [ ] 16. When should you add or remove an attribute?
    - [ ] 17. How do you create a HTML Element?
    - [ ] 18. How do you add your Element before another Element?
    - [ ] 19. How do you add your Element after another Element?
    - [ ] 20. How do you change the style of your Element?
    - [ ] 21. Should you change the style with JavaScript? Why or why not?
    - [ ] 22. How do you get the contents of a Element?


- [ ] 5. Events
    - [ ] 1. How do you add an event listener?
    - [ ] 2. Why do you add event listeners?
    - [ ] 3. How do you remove an event listener?
    - [ ] 4. When should you remove event listers? Why?
    - [ ] 5. What are the common mouse events?
    - [ ] 6. What are the common keyboard events?
    - [ ] 7. What are the common form events?
    - [ ] 8. How do you get the value of a event target?


# Phase 3
    - [ ] 1. Object-oriented Programming (OOP)
        - [ ] 1. this in JavaScript
            * this keyword by default refers to the global scope or the window object
            * this refers to the object of the currently executing function
        
        
        - [ ] 2. JavaScript prototypes
            * an objects that are built into javascript, or the blue prints containing methods and properties that can be inherited by other objects
        
        
        - [ ] 3. The Module and Factory patterns for creating objects
            *
        
    - [ ] 2. Functional Programming ideas (FP)
        - [ ] 1. Reduce side effects

        - [ ] 2. Write pure functions

        - [ ] 3. Write immutable code

    - [ ] 3. Asynchronous JavaScript (AJAX)
        - [ ] 1. Using Fetch

        - [ ] 2. JavaScript Promises

        - [ ] 3. Reading APIs

Testing
- [ ] 1. OOP
    - [ ] 1. How does this changes in different context? Howmany contexts are there?
    
    - [ ] 2. What is a prototype in JavaScript?
    
    - [ ] 3. How do you create objects in JavaScript?
    
    - [ ] 4. What is the module pattern? When do you use it?
    
    - [ ] 5. What is the factory pattern? When do you use it?

- [ ] 2. FP
    - [ ] 1. What is immutability?
    
    - [ ] 2. What array methods are immutable?
    
    - [ ] 3. How do you change JavaScript properties while not mutating the object?

    - [ ] 4. What is a pure function?

    - [ ] 5. How many kinds of actions should a function contain?

    - [ ] 6. What are side effects?

    - [ ] 7. How do you handle side effects when you write pure functions?

- [ ] 3. AJAX
    - [ ] 1. What are JavaScript promises?
    - [ ] 2. How do you chain promises?
    - [ ] 3. How do you catch errors when using promises?
    - [ ] 4. How do you use the Fetch API?
    - [ ] 5. What does CRUD stand for?
    - [ ] 6. How do you query Github’s API to get a list of your own repositories?
- [ ] 4. Best practices
    - [ ] 1. Why do you avoid global variables?
    - [ ] 2. Why use strict equality (===) instead of normal equality (==)?
    - [ ] 3. How do you use ternary operators to help you write terser code?
    - [ ] 4. What ES6 features help you write terser code?
    - [ ] 5. What is event bubbling and capturing?
    - [ ] 6. How do you delegate events?
    - [ ] 7. How do you remove event listeners? When should you remove them?