//------------------------------------------------------
// Data
//------------------------------------------------------
    //Get an array of all the names of all the animals
var animals = [
    {name: 'George', species:'rabbit'},
    {name: 'Osiris', species:'dog'},
    {name: 'Raro', species:'dog'},
    {name: 'Dragos', species:'fish'},
    {name: 'Danny', species:'cat'},
    {name: 'Ursula', species:'fish'},
    {name: 'Hugo', species:'bear'}
]


//accessing animal name with map function
var names = animals.map(function(animal){
   return animal.name
})

//pushing names into a new array with for loop
var newArr = [];
for (var i=0; i <animals.length; i++){
    //console.log(animals[i].name);
   newArr.push(animals[i].name)
}
//console.log(newArr);


//pushing names into array with map aka HOF
var sisters = [
   {name:'Jessica', status: 'oldest', age: 37},
   {name: 'Jannaee', status: 'middle', age: 36},
   {name: 'Felicia', status: 'youngest', age: 32}
]

var status = sisters.map(sister =>`${sister.name} is the ${sister.status} sister and she is ${sister.age}.`)
//console.log(names)
//console.log(status)

//Data 
//Use the value in array to total it up with a for and with a reduce loop
let theMarket = [
    {item: 'pie', price: '$25.00'},
    {item: 'cake', price: '$40.00'},
    {item: 'rice', price: '$20.00'},
    {item: 'bread', price: '$70.00'},
    {item: 'tapioca', price: '$50.70'},
    {item: 'brownie', price: '$30.00'}        
]

//Create a function that takes in an item
//checks if items is in the array
//returns the price for that item

function itemLookup(itemInQuestion){
    let returnedPrice = 0;
    for (let i=0; i < theMarket.length; i++){
        //price += theMarket[i].amount;
        if (theMarket[i].item === itemInQuestion) 
        return returnedPrice = theMarket[i].price

    }
        return false;
}


itemLookup('rice');