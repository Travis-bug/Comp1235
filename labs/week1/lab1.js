// This is the single line comment in Javascript //
/* This is a
* multi line
* comment
*  */

// let and const have local scope
// var has global scope
let username = "Assal"
const userID  = 101576306 //const is used for variable with fixed size in memory space
var isRegistered = true

if (1 == "1"){
    console.log("The number 1 was equal to the string 1")
    // the above line will execute
}
if (username === "Assal") {
    document.write("Your username was: " + username)
}