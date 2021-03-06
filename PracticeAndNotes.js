//What is an object?

//syntax for a n Object literal
// const objName = {
//     name: 'value'
// }

// console.log(objName);

//Properties
// const person = {
//     name: 'Jane',
//     age: 25,
//     location: 'United States',
//     school: 'Lambda School',
//     'last name': 'Doe'
// }

// console.log(person);

//access properties with dot notation
/*
console.log(person.name);
console.log(person.age);
console.log(person.location);
console.log(person.school);
*/
//access properties with bracket notation //* Use Quotation marks with bracket notation *//
/*console.log(person['name']);
console.log(person['age']);
console.log(person['location']);
console.log(person['school']);
console.log(person['last name'])
*/
//Object Methods
// const student = {
//     name: 'Jane',
//     age: 25,
//     location: 'United States',
//     school: 'Lambda School',
//     study: function(topic) { //a method is a function in an object
//         console.log(`${this.name} likes to study ${topic}.`);
//     }
// }

// student.study('code'); //Calling the method with dot notation

// student['study']('coding') //calling the method with bracket notation



//create object methods outside of the object literal
// student.play = function(activity){
//     console.log(`${this.name} loves to ${activity}.`)
// }

// student.play('swim')  //invoking the function

//Object literals gain all the methods available to objects:


// //Object methods Entries
// console.log(Object.entries(student))

// //Access Entry data
// console.log(Object.entries(student)[1]);

// //Access Keys only
// console.log(Object.keys(student));

// //Access values only
// console.log(Object.values(student));

/************************************************8
 * Object Literals-Objective Tutorial
 * Create an object that tells us all about you.
 * This object should include:
 * -firstName
 * -lastName
 * -age
 * -hometown
 * -favoriteColor

 */
// const personObj = {
//     firstName: 'Jared',
//     lastName: 'Womack',
//     age: 33,
//     hometown: 'Spokane',
//     favoriteColor: 'Black'
// }
// //accessing values with dot notation
// console.log(personObj);
// console.log(personObj.firstName);
// console.log(personObj.lastName);
// console.log(personObj.age);
// console.log(personObj.hometown);
// console.log(personObj.favoriteColor);

//accessing values with bracket notation
// console.log(personObj);
// console.log(personObj['firstName']);
// console.log(personObj['lastName']);
// console.log(personObj['age']);
// console.log(personObj['hometown']);
// console.log(personObj['favoriteColor']);

// //Using Object Methods to access the entries, keys, and values
//  console.log(Object.values(personObj));
//  console.log(Object.keys(personObj));
//  console.log(Object.entries(personObj));


/****************************************************
 * Once you're done creating your object, do the following:
 * -Return a list of the values of your object.
 * -return a list of the keys of your object
 * -return a list of the entries of your object 
 * -
 * 
 */

/*
  Objects are used all over in JavaScript.
  The following problems will help you get a better feel for object literals
  
  We want you familiar with the following Object methods:
  .keys(), .values(), .entries(), 
  
  https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/prototype


*/

/* Codepen Problem set Object Literals
  Problem 1: Giver Info
  return an array of an Objects properties/keys
*/

// const student = { name: 'Jonas', age: '12', gender: 'M', role: 'Receiver' };
// const studentKeys = Object.keys(student) // finish this.
// console.log(studentKeys);

// /* 
//   Problem 2: Giver Info
//   using the same object as above.
//   return an array of an Objects values
// */

// const studentValues = Object.values(student); // finish this.
// console.log(studentValues);
// /* 
//   Problem 3: Giver Info
//   Add a list of characters to Jonas' object
//   The list should be called 'characters' and it should be an array.
//   example:
//   { name: 'Jonas', age: '12', gender: 'M', role: 'Receiver', characters: ['Lily', 'Mother', 'Father', 'Caleb', 'Asher']}
//   next: select that list and iterate over it using `.forEach` simply log the name of each char in the list;
// */

// student.characters = []; // finish this.
// student.characters.push('Lily');
// student.characters.push('Mother');
// student.characters.push('Father');
// student.characters.push('Caleb');
// student.characters.push('Asher');

// student.characters.forEach(char => console.log(char)); //Iterates through the array and console .logs all of the values

// console.log(student)
// /*****************************************************************
//  * ARRAYS IN JAVASCRIPT
//  * Arrays are very fast at retrieving a specific item.
//  * The methods all live on the JS Array Prototype. 
//  * All indexes in an array are numerical
//  * To find something with in an array, you will have to search through the whole list. Looping through an array is not the most
//  * efficient way of searching for something and their are much better ways to do it.
//  * Arrays are mutable
//  */
//         //Anatomy of an Array
//         //  array: {
//    //         '0': 'firstValue', //first item in the array. Zero based index.
//    //         '1': 'secondValue' // second item in the array.
//    //     }       array[0] returns 'firstValue

// //How to work with an array: Accessing Items

// const hogwarts = ['Harry', 'Hermione', 'Ron'];
// console.log(hogwarts[0]);
// console.log(hogwarts[1]);
// console.log(hogwarts[2]);

// hogwarts.push('Dumbledore'); //Will add something to the end of an array
// hogwarts.unshift('Snape'); //Will add something to the beginning of an array
// hogwarts.pop()  // POP will remove something from the end of an array and return its value
// hogwarts.shift() //Shift will remove the first element in an array
// hogwarts.splice(1, 1) //The splice(index, number of items to remove) method changes the contents of an array by removing or replacing existing elements and/or adding new elements 

// //How to work with an array: Updating Items
// hogwarts[0] = 'Hagrid';



// console.log(hogwarts)
// /**************************
//  * Create an Array and Practice
//  * 
//  */
// const practiceArr = [];

// practiceArr.push('Lincoln');
// practiceArr.push('William');
// practiceArr.push('Keera');
// practiceArr.push('Kaleb');
// practiceArr.push('Whitney');
// practiceArr.push('Ted');
// practiceArr.push('Nancy');
// practiceArr.push('Denise');
// practiceArr.push('Jareds clone');

// //  firstPersonGone = practiceArr.shift();
// //  secondPersonGone = practiceArr.pop()
// //  theSplit = practiceArr.splice(2, 5)
// //  theLastOnesStanding = practiceArr;

// // console.log(practiceArr)
// // console.log(firstPersonGone);
// // console.log(secondPersonGone);
// // console.log(theSplit);
// // console.log(theLastOnesStanding);

// //The last item in an array
// // console.log(theSplit[theSplit.length -1] ) 
// // console.log(practiceArr[practiceArr.length -1])
// /******************************************************************
//  * Map filter and reduce methods on arrays
//  * practice top ten methods on arrays
//  */
// //map

// const mappedArr = practiceArr.map(element => element.toUpperCase());
// console.log(mappedArr)


// //reduce

// let groceries = [];

// groceries.push('spinach');
// groceries.push('lettuce')
// groceries.push('beans')
// groceries.push('peanuts')
// groceries.push('steak')
// groceries.push('eggs')
// groceries.push('tomato')
// groceries.push('onions')
// groceries.push('curry')
// groceries.push('bread')

// //filter
// const startsWithB = groceries.filter(item => item = 'spinach')

// console.log(groceries);

// console.log(startsWithB)


// /***********************************************
//  * Lecture Notes
//  * site:eloquentjavascript.net block scope <-----this is a way to search certain sites to try to get a certain result
//  * 

//  *  */

//  // var let Const Global  variables
// var myvar = 'I am a var'; // var is mutable, var is function scoped. It can be contained inside a function.

// let myLet = 'I am a let' // let is not mutable. And is block scoped. Let is 

// const myConst = " I am a Const" //is not mutable.

// myGlobal = 'I am a global variable. ' // There is mostly no reason to ever use global variables

// //Using var causes problems because things can be reassigned unintentionally
// //This is a block scope between the curly brackets
// {
//   var varBlockCitizen = ' I was created in Var block'
//   console.log(varBlockCitizen);
// }
//                             //This console.log works because the var can be accessed from outside the block.
// console.log(varBlockCitizen);

// // Let variables are block scoped

// {
// let letBlockCitizen = 'I was created in a let block';
// console.log(letBlockCitizen)
// }

// console.log(letBlockCitizen) // This returns undefined because the variable cannot be reached inside the function.


// {//lexical scope
//                         //Then it will try to reach into the global scope
//   {
//     console.log(letFreeAgent(2,2))//This will try to reach out to the next scope and 
//   }
// }

// letFreeAgent = (num1, num2) => {
//   return num1 + num2
// }
//Javascript has a two pass compiler which allows us to call afunction and then build it later.

/********************************************************************************
 * arrays 
 * Are index based, and the index is zero based
 * The first item in an array is referenced with [0] the second [1] etc.
 * 
 * 
 * */

let fruits = [];
fruits.push('apple')
fruits.push('pear')
fruits.push('banana')
fruits.push('watermelon')

fruits.push('peach');
fruits.splice(2, 1, 'orange') // the one is how many are deleted a 0 will not take anything out

// fruits.sort();
// console.log(fruits);

/*************************************************
 * Functions
 */

 //Function Declarations
 //Are hoisted and can be called before they are defined because of Javascripts two pass compiler
// for(let i = 0; i <fruits.length; i++) {
//   console.log(fruitFactory(fruits[i])) 
// }
//  function fruitFactory(fruit) {
// console.log(`${fruit} juice`) }


//function Expression
const fruitFactory = function(fruit) {
  console.log(`${fruit} juice`)
}
console.log(fruitFactory('pineapple'))








