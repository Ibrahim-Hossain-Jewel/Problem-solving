//write a program for reverse a sentance;

function reverseSentence(str){
    let container = '';
    for(let i =str.length; i>0; --i){
        container+= str[i];
    }
    return container;
}
console.log(reverseSentence('jewel rana'))