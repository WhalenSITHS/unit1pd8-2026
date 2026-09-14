/* let x = 5;
//let can change
x = 9;
const y = 10;
//const cannot change, use const 99% of the time
y = 11;
console.log(x);
 */

//Strings
/* let a = "ABC";
const myName = "Michael";
let b = `my name is ${myName}`;
//template literals are like F strings in Python and allow us to insert variables into Strings
console.log(b);

//Integers
const c = 74;

//Booleans
let f = false;
//null is absence of value
let m = null; */
//undefined has no value  unintentionally
//const y;

function add(x, y) {
  //console.log(x + y);
  return x + y;
}
let x = add(5, 15);
console.log(x);

function isValid(password) {
  //does something
  //does more things
  console.log("Confirmation");
}
//abstraction, taking code and saving it for reusability, readability
isValid("Printer2426!");
