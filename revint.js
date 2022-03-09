//Reversing an Int value.
//about parseInt() It will remove the fraction number and zero.
//Math.sign() return 1 and -1 if the Math.sign() accept negative number then the Math.sign() return -1 and then if you provide positive number then return 1.

function reverseInt(n) {
    return parseInt(n.toString().split("").reverse().join(""))*Math.sign(n); 
}
console.log(reverseInt(-500));
