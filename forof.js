let str = "hello wrold";
function x(str){
    var reverse = '';
    for(let character of str){
        reverse = character + reverse;
    }
    return reverse;
}
console.log(x(str));
/*
    reverse data with reducer javascript;
    
*/