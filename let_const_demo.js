/*
ES2015 introduced two important new JavaScript keywords: let and const.

These two keywords provide Block Scope variables (and constants) in JavaScript.

Before ES2015, JavaScript had only two types of scope: Global Scope and Function Scope.

*/


/*
{
    var x = 2;
}
console.log(x);  // x CAN be used here i.e 2


{
    let y = 3;
}
console.log(y);// y can NOT be used here and error will show up

*/

/*
//Redeclaring a variable using the var keyword can impose problems.

var x = 10;
// Here x is 10
{
  var x = 2;
  // Here x is 2
}
// Here x is 2
console.log(x);
*/


/*

//Redeclaring a variable using the let keyword can solve this problem.
//Redeclaring a variable inside a block will not redeclare the variable outside the block:


var x = 10;
// Here x is 10
{
  let x = 2;
  // Here x is 2
}
// Here x is 10
console.log(x);
*/

//Incorect
const PI;
PI = 3.14159265359;

//Correct
const PI = 3.14159265359;
