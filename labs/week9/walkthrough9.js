//1. dimensional array => []
const  oned  =[1,2,3];
console.log("oned:" , oned);
const twod  = [
    ["a" , "b"], //0
    [1,2,3],//1
    [6,7]//2
];

console.log ("Twod: ", twod  );
//number of elements in the array
console.log("Number: ", oned.length);
console.log("Number of 3rd element in twod:", twod[2].length);



//2. scope of the variable in a function

let a =5;//global var
function outer(name) {
    console.log("outer function: "+a);
    console.log ("outer function: "+name);
console.log("outer function")


function inner() {
    let b =10; //local var
    console.log("inner function: "+b);
    console.log ("inner function: "+name);//global can work anywhere
}
inner();
    let b;
    console.log("inner function: "+b);//NO, local cannot work everywhere
}




//calling
outer("Travis")
//3. create a class called "Customer"
//SYNTAX => class className{}
//pass the args/parameters in a class => constructor
//name, address, city

class Customer{
    constructor(name, address, city) {
        //define the var
        this.name = name;
        this.address = address;
        this.city = city
    }
}
let cust1  = new Customer("Travis",
   "123 street", "Toronto");
console.log("Customer 1: ", cust1);
const cust2  = new Customer("GBC",
    "xyz street", "Toronto");
console.log("Customer 2: ", cust2);

//4.callback functions
function  SumAndAvg(numbers, callback) {
    let sum = 0;
    for (let i = 0; i < numbers.length; i++) {
        sum += numbers[i];
    }
    const avg = sum / numbers.length;
    callback (sum, avg);
}

function  log (sum, avg) {
    console.log("sum : ", sum,);
    console.log("Average: ", avg);
}

function display() {

}

//calling
SumAndAvg( [1,2], display);
SumAndAvg( [5,5], display);

//5. JSON
// example
const person  ={
    "name" : "travis",
    "age" : 18,
    "city" : "Toronto"
}
// to convert jsom to string
let  conv_str = JSON.stringify(person);
console.log(conv_str);

// to convert string to json
let json_conv = JSON.parse (conv_str);
console.log("JSON: ", json_conv);
