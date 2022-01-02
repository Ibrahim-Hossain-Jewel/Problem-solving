//Reversing an Int value.
//about parseInt() It will remove the fraction number and zero.
//Math.sign() return 1 and -1 if the Math.sign() accept negative number then the Math.sign() return -1 and then if you provide positive number then return 1.

function reversingInt (num){
    const reversed = parseInt(num.toString().split("").reverse().join(""));
    if(num<0){
        return reversed * -1;
    }
    return reversed;
}
console.log(reversingInt(-500))