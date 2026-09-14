/* let x = 5;
//let can be changed
x = 6;
console.log(x);
const y = 5;
//const cannot be re-assgined
//integers or Floats
/* y = 6;
console.log(y);
 */
//Booleans True or False

//Strings
/* let name = "Mike";
//`` are for template literals AKA using variables in strings
const greeting = `Hello my name is ${name}`;

console.log(greeting);

//null is the absence of value
let n = null;
//no value assigned is undefined, thats bad!
let u;
console.log(u); */
//functions are a form of Abstraction
function add(x, y) {
  //console.log(x + y);
  return x + y;
}
const value = add(5, 15);
//accepts String and outputs boolean based on X
function isValid(password) {
  //does something
  //does more stuff
  //more things
  console.log("invalid Password");
}

isValid("1");
