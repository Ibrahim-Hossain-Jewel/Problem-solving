//Making reverse integer
function reverseInt(n){
    let reverse =  n.toString().split('').reverse().join('');
    return parseInt(reverse) * Math.sign(n);
}

console.log(reverseInt(-1200));
