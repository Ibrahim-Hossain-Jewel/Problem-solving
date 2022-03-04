//Now learning the reducer() built-in function;
//the reducer() method work with array, object, number, string
let arr = "hello work";
let num = arr.split("").reduce((accumulator, currentvalue)=> currentvalue + accumulator, '');
debugger;
console.log(num);
