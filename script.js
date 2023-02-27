console.log("Hi Mom !");

// name = "Peter Pen"
// console.log(name);

// food  = 20
// tip  = 0.2
// tipAmount = food * tip
// console.log(tipAmount);


// userInput in Js

// food = Number(prompt('how much was the food?'))
// tipPercentage = Number(prompt('tip %'))/100
// tipAmount = food * tipPercentage
// total = food + tipAmount
// console.log("tip amount",Math.floor(tipAmount));
// console.log("total",total);

// datatype (strings,numbers)

/***
 *   numbers 1,2.5
 * strings 'hello', "world"
 * arrays []
 * objets {}
 * boolean true/false 
 */

/* Math Operators
Multiple *
Divide / 
Exponents **
Modulo % 
add +
subtract - 
*/

/**
 * Math Methods
 * Floor - rounds a number down to nearest
 * integer,and returns the result
 * Ceil - rounds a number up to near 
 * int and returns the result
 * Random - gives random number
 */

/** 3 types of varibles  keywords
 * const The values cannot be changed
 * let The values can be changed
 * var The values can be changed(Not recommeded)
 */

// Baby Weather App
// if rain 'Grab your umbrella'
// else 'Wear your sunglasses

// let weather = 'rain'
// if(weather == 'rain'){
//     console.log(true);
// }
// else{
//     console.log(false);
// }
// if(5 == 5){
//     console.log("5" , true);
// }
// else{
//     console.log(false);
// }
function sayMyName(){
    console.log('Prafful');
    console.log('Kunal');
}
//sayMyName()

// Dynamic Functions
function MyName(name){
    console.log(name);
}
//MyName("Vijay")

function greeting(name){
    //template literals
    greet = `hi ${name}, Nice to meet You`
    console.log(greet);
}
// greeting('Arvind')
function sum(a,b) {
    return a + b;
}
// num1 = sum(1,2)
// console.log(num1);
function calculateFoodTotal(food,tipAmount) {
    tipPercentage = tipAmount/100
    tipAmount = food * tipPercentage
    total = sum(food,tipAmount)
    return total
}
console.log(calculateFoodTotal(300,20));

//ES6
// Arrow Function =>
// explicit return arrow function
const sumArrow = (a,b) =>{
    return a + b
}
// implicit return arrow function
const multiple = (a,b) => a * b
