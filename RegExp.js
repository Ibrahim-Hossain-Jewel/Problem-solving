// Problem solving with regular Expression
//1. filter is it color code or not
//2. filter out is it bangladeshi phone number or not;

//write a program to filter a string is it color code or not;
const color = '#2A2A2A';
//now write RegExp to verify the color code!;
const verify = /#?([\da-fA-F]{2})([\da-fA-F]{2})([\da-fA-F]{2})/g;
const isMatch = color.match(verify);
console.log(isMatch);
const replacedCode = color.replace(verify,'jewel');
console.log(replacedCode);
const isRight = verify.test(color);
console.log(isRight)

//write a RegExp code for verify the bangladeshi phone number
//+8801794593235
console.log("code for number verification")
const number = '+8801794593235';
const numberVerifier = /((\+?88)?01[1-9]{1,12})/g;
console.log(numberVerifier.test(number));
//Write a program that verifiy string the string doesn't consider special character 
//select korla true otherwise false;
console.log('string filter regular expression');

//how to remove special character in javascript;

const pure = 'Bangladesh$$%/\\';
const countryRegExp = /\$|\%|\\|\//gi;
console.log(pure.replace(countryRegExp,''))