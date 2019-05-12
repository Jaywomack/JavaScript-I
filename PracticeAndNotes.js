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

const student = { name: 'Jonas', age: '12', gender: 'M', role: 'Receiver' };
const studentKeys = Object.keys(student) // finish this.
console.log(studentKeys);

/* 
  Problem 2: Giver Info
  using the same object as above.
  return an array of an Objects values
*/

const studentValues = Object.values(student); // finish this.
console.log(studentValues);
/* 
  Problem 3: Giver Info
  Add a list of characters to Jonas' object
  The list should be called 'characters' and it should be an array.
  example:
  { name: 'Jonas', age: '12', gender: 'M', role: 'Receiver', characters: ['Lily', 'Mother', 'Father', 'Caleb', 'Asher']}
  next: select that list and iterate over it using `.forEach` simply log the name of each char in the list;
*/

student.characters = []; // finish this.
student.characters.push('Lily');
student.characters.push('Mother');
student.characters.push('Father');
student.characters.push('Caleb');
student.characters.push('Asher');

student.characters.forEach(char => console.log(char)); //Iterates through the array and console .logs all of the values

console.log(student)
/*****************************************************************
 * ARRAYS IN JAVASCRIPT
 * 
 */
        //Anatomy of an Array
        //  array: {
   //         '0': 'firstValue', //first item in the array. Zero based index.
   //         '1': 'secondValue' // second item in the array.
   //     }       array[0] returns 'firstValue

//How to work with an array: Accessing Items

const hogwarts = ['Harry', 'Hermione', 'Ron'];
console.log(hogwarts[0]);
console.log(hogwarts[1]);
console.log(hogwarts[2]);

hogwarts.push('Dumbledore'); //Will add something to the end of an array
hogwarts.unshift('Snape'); //Will add something to the beginning of an array

console.log(hogwarts)










