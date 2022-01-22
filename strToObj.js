//Convert a string to Javascript object.
const string = "Hello World";
function maxChar(string){
    const charMap = {};
    let max = 0;
    let maxChar = '';

    for(let i of string){
        charMap[i] = charMap[i] + 1 || 1;
    }
    for(let char in charMap){
        if(charMap[char] > max){
            max = charMap[char];
            maxChar = char;
        }
    }
    return max;
}
console.log(maxChar(string));
console.log("your console data is running")
maxChar(string);
