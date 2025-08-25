// Truthy Values
// A truthy value is any value that is not falsy.
// It behaves like true when converted to a boolean.

if ("hello")   // truthy (non-empty string)
if (123)       // truthy (non-zero number)
if ([])        // truthy (empty array)
if ({})        // truthy (empty object)
if (true)      // truthy
if ("0")       // truthy (non-empty string, even if it looks like zero)


// Falsy Values
// A falsy value is a value that becomes false when converted to a boolean.


if (0)       // falsy → will not run
if (null)    // falsy → will not run
if ("")      // falsy → will not run
if (undefined) // falsy → will not run


//EXAMPLE
// const userName = "Mary";

// if (userName) {
//   console.log("Welcome!");
// } else {
//   console.log("Please enter your name."); // runs because "" is falsy
// }

//1. Declaring Boolean Variables
//let isLoggedIn = true;
//let hasPaid = false;

//2.  Boolean Values in Conditions

//let isOnline = true;

if (isOnline) {
  console.log("User is online");
} else {
  console.log("User is offline");
}

/*1.Falsy values (considered false in conditions):
false

0

"" (empty string)

null

undefined

NaN

Truthy values (considered true in conditions):
"hello"

1, -1

[] (empty array)

{} (empty object)

true
*/

/*BOOLEAN OPERATORS
1. Logical AND: &&
Returns true if both values are true.
2. Logical OR: ||
Returns true if at least one value is true
3. Logical NOT: !
Flips the value
*/

/*COMPARISON OPERATORS That Return Booleans
These return either true or false:
*/
5 > 3       // true
10 < 5      // false
5 == "5"    // true (loose equality)
5 === "5"   // false (strict equality)
5 !== 3     // true


//1. EXAMPLE
 const password = "1234";

if (password.length >= 4) {
  console.log("Password accepted.");
} else {
  console.log("Password too short.");
}

/*CONVERT VALUES TO BOOLEAN
1.Use the Boolean() function*/
Boolean("hello")    // true
Boolean("")         // false
Boolean(0)          // false
Boolean(1)          // true

//2.Or the double NOT trick
!!"hello"    // true
!!0          // false


        //EXAMPLES
const isHappy = true;

if (isHappy) {
  console.log(" You're happy!");
} else {
  console.log(" You're not happy.");
}


















