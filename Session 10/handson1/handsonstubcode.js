// Define a function named power which calculates the result of a base raised to the power of an exponent

// Invoke the function with base 2 and exponent 3 passed as arguments
function power(base, exponent){
  var res = 1;
   for (var i = 1; i <= exponent; i++) {
          result *= base;
      }
    return result;
}
var pow = power(2, 3);
console.log(pow);
