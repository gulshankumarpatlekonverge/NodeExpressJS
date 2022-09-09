// Introduction
const amount = 10;

if(amount < 10){
    console.log("Small Number");
} else{
    console.log("Large Number");
}

console.log("First Program");

// Globals: No window

/*
    __dirname: path to the current directory
    __filename: file name
    require: function to use modules(CommonJs)
    module: info about current module(file)
    preocess: info about env where we program is being executed
*/
console.log(__dirname);
setInterval(() =>{
    console.log("Hello Gulshankumar");
}, 5000)

// Modules: Encapsulated code(only shre minimum)
//commonJs, every file is module

const john = "John";
const peter = "Peter";

const sayHi = (name) =>{
    console.log(`Hello there ${name}`);
} 

sayHi("Susan");
sayHi(john);
sayHi(peter);


 