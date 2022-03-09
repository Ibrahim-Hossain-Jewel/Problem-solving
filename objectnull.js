//object generation with null value from string;
let string = 'jewel';
//for making object generation with null value; fist of all we need to declare an empty object
let chars = {};
for(let char of string){
    chars[char] = chars[char]+1 || 1;
    
}
console.log(chars);