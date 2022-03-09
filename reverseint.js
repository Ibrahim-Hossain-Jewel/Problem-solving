//Making reverse integer
function reverseInt(n){
    if(n<0){
        var reverse = parseInt(n.toString().split('').reverse().join('')) * -1;
    }
    return reverse;
}

console.log(reverseInt(-12));
