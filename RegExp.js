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


