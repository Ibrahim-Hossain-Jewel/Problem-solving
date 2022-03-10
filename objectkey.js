//bringing out the key and value from an object using Object.keys(); it return an array as well;
const family = {
    brother: 'null',
    sister: 'Nasima',
    sister: 'Tosiba'
}
//convert this object properties into array;
const arr = Object.keys(family);
let val = arr.toString();
console.log(val)
