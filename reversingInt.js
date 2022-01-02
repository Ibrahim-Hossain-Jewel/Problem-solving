//Reversing an Int value.
function reversingInt (num){
    return parseInt(num.toString().split("").reverse().join(""));
}
console.log(reversingInt(981))