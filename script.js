// Js Functions

// in js, they are treated as first class objects or citizen
// in js, functions can be stored in variable, can be passed as an argument to other functions
// and also can be returned from a function body
// normal function


// function fun(param1,param2){
    

// }
// fun(arg1,arg2)

// anonymous function : functional expression

// Undefined : its not error : its a special keyword or placeholder
// evertime in js function , js expects that function is returning something.

// let fun = function (){
//     let a = 10;
//     console.log(10);
//     return 10;
// }
// console.log(fun,"what is inside variable.");
// console.log(fun(),"calling the variable.");


// Arrow function : functional expression

// let fun = (param1,param2)=>{
// // function body
// }
// fun();


// IIFE : Immediatley Invoked Functional Expression
// it run once,it called once.its not called again and again.

// very important for making logicas for API call;
// ((a,b)=>{
//     let c=a+b;
//     console.log(c,"output from iife");
// })(3,7)

// es6 : ecmascript v6; arrow function , IIFE , let and const

// rest operator : es6 variant
// function fun(...par){
//     console.log(par,"This are all the aruguments coming in parameter.");
// }
// fun(2,4,2,44)

function addition(a,b,add){
    let c= a+b;
    return c
}

function calc(a,b,add){
    // a,b are variable storing number,add: variable storing function
    return add(a,b)
}

console.log(calc(3,2,addition),"Summation function working inside calc function.");