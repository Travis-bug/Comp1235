/* lab6_anonymous_function.html
* Practice: Anonymous function
* They don't have names
* But, you can add a pseudo-name for a function's definition by saving
* The function definition into a variable
* These will be useful later on for callback function:
*   A callback function is a function definition passed as an argument to another
*           function call
* */

// Define the anonymous function
const calculate = function (num1, num2) {
    return num1/num2
}
console.log(calculate)

// Call the function
console.log(calculate(1, 2));

let result = calculate(1, 2);
console.log(result);