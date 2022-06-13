// WHAT IS THIS EVEN DOING?

// For questions 1-3, each code block is syntactically and logically correct. Your job is to describe what is happening. 
// They are in isolation -- variables in one question do not affect other questions.
// Describe the code as it would be run, and make sure you give us the console.log's value at the end.
// (Don't just say 'we console log the variable' -- instead say something like 'we console log 'yes'')


// 0. WRITE YOUR DESCRIPTION HERE
// //EXAMPLE. We make a variable called number and set it to 1 as a number.
// Then we increment the number variable. Number is now 2.
// We check if number is greater than or equal to 2. 2 is equal to 2, so
// we console.log 'yes'.

//CODE
/*
let number = 1;

number++;

if (number >= 2) {
  console.log('yes');
}

*/


// 1. WRITE YOUR DESCRIPTION HERE
// Create a variable called name and assign it the string 'Dane'.
// We write a conditional that checks if name is equal to 'Mary', and if so, log in the console the string 'Hi, Mary!'.
// If the variable name is anything else, log in the console the string 'How do you do?'.
//

//CODE
/*
let name = 'Dane';

if (name === 'Mary') {
  console.log('Hi, Mary!');
} else {
  console.log('How do you do?');
}


*/

// 2. WRITE YOUR DESCRIPTION HERE
// Create a variable called secret, it has no value (undefined).
// Create a variable called code and assign it the value 123.
// Create a conditional that checks if the variable code is exactly the value 123, and if so, 
// assign the variable secret the string 'super'.
// Additionally, multiply the variable code by 2.
// Create another conditional that checks if the variable code is greater than 250 and if so, 
// assign the variable super the string 'duper'.
// Finally, log to the console the result of the variable secret.
// The console should log 'super' (this is because the value of code is 246, 
// and doesn't result in the previous conditional doing anything).

//CODE
/*
let secret;

let code = 123;

if(code === 123) {
  secret = 'super';
  code = code * 2;
}

if (code > 250) {
  secret = 'duper'
}

console.log(secret)

*/

// 3. WRITE YOUR DESCRIPTION HERE
// Create a variable named isStudent and assign the boolean true to it.
// Create another variable named age and assign it the value 34.
// Create a third variable name zip and assign it the value 55407.
// Create a conditional that first checks if the variable isStudent is true and 
// if the variable zip has a value greater than 80000.
// If this is true, log out into the console, 'You're a student on the West Coast!'.
// Check the next else if conditional to see if the isStudent conditional is false or
// if the age variable is less than 30, and if either of these is the case,
// log in the console, 'What are your hobbies?'
// Then, check the next else if statement to see if the variable isStudent is true,
// Log into the console 'Welcome to Prime!'
// And if none of these conditions pass the else if test, log into the console 'How about the weather?'
// After the code is run, the console will log 'Welcome to Prime!'

//CODE
/*
let isStudent = true;
let age = 34;
let zip = 55407;

if (isStudent === true && zip > 80000 ) {
  console.log(`You're a student on the West Coast!`);
} else if (isStudent === false || age < 30) {
  console.log('What are your hobbies?');
} else if (isStudent === true) {
  console.log('Welcome to Prime!');
} else {
  console.log('How about the weather?')
}

*/




// REVERSE
// Now, for questions 4-6, we'll give you a description and some code. 
// Some of the code will NOT match the description.
// Comment above the problem code, and describe a potential solution.
// Look closely -- things are logically incorrect or missing and wrong in the code!

// EXAMPLE
// 0. (DESCRIPTION OF CORRECT BEHAVIOR)
// We make a variable called number and set it to 1 as a number.
// Then we increment the number variable. Number is now 2.
// We check if number is greater than or equal to 2. 
// -- it is, so we console.log 'yes'

//CODE
/*
let number = 1;

// FIX - number-- decrements number, but the instructions ask to increment. 
// Should be number++.
number--; 

if (number >= 2) {
  console.log('yes');
}

*/



//4. We start with three variables -- colorOne is set to 'blue' and 
// colorTwo is set to 'red', and mix is set to true. We check if mix is true 
// -- it is, so we set colorOne and colorTwo to 'purple'

//Potential Solution:
//There are three variables as described and the code if run properly should 
//set the variables colorOne and colorTwo both to 'purple'.
//The conditional is true (the variabe mix is indeed true), however, in the same curly brackets, 
// the colorTwo should also be set to 'purple'. The coder forgot to do so.

/*
let colorOne = 'red';
let colorTwo = 'blue';
let mix = true;

if (mix === true) {
  colorOne = 'purple';
  //Also set colorTwo to purple
  colorTwo = 'purple';
}
*/

//5. We start with two variables -- temp is set to 40 and time is set to 4.
// We check if temp is higher than 39 and if time is greater or equal to  4 
// -- they are so we console.log 'throw away the food!'

//Potential solution:
//The variable temp is indeed set to the value of 40, but time is declared as a constant. In this scenario, it may be OK
// as long time doesn't need to be changed, but once a constant is declared with a particular value it cannot be changed.
//As for the conditional, the code description calls for both variables, temp and time, to be met ("and"), however,
// the operand used is || which would cause the conditional to be met if either of the variables meet their requirements
//as it means "or". The correct operand to use would be && which would cause the conditional to be met only
//if both the variables meet their requirements ("and").
//The console will log 'throw away the food!' since the operand || is used and 
// either of the variables have met their conditions.
//

/*
let temp = 40;
const time = 4;

//Rewrite as 
//if (temp > 39 && time >= 4) {
if (temp > 39 || time >= 4) {
  console.log('throw away the food!');
}
*/

//6. We start with two variables -- age is set to 21 and minAge is set to 21.
// We check if age is greater than or equal to minAge 
// -- it is, so we console.log 'enter'.

//Potential solution:
//The code description is written such that age is checked to be greater than or equal to minAge,
//however in the code, minAge is written first and the operand less than or equal to (<=) is used.
//Also, if minAge is less than or equal to age, the result will log 'no entry', when the code description
//stated that the console should log 'enter'.

/*
let age = 21;
const minAge = 21;

//Potential solution:
// if (age >= minAge) {
// console.log('enter');
// } else {
//   console.log('no entry');
//}
//The console will log 'enter').

if(minAge <= age) {
  console.log('no entry');
} else {
  console.log('enter');
}
*/

