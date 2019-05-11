//What is an object?

//syntax for a n Object literal
const objName = {
    name: 'value'
}

console.log(objName);

//Properties
const person = {
    name: 'Jane',
    age: 25,
    location: 'United States',
    school: 'Lambda School',
    'last name': 'Doe'
}

console.log(person);

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
const student = {
    name: 'Jane',
    age: 25,
    location: 'United States',
    school: 'Lambda School',
    study: function(topic) { //a method is a function in an object
        console.log(`${this.name} likes to study ${topic}.`);
    }
}

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

 


/****************************************************
 * Once you're done creating your object, do the following:
 * -Return a list of the values of your object.
 * -return a list of the keys of your object
 * -return a list of the entries of your object 
 * -
 * 
 */


















