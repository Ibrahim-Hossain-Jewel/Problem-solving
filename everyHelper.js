//solve a palindrome problem the help of every() array helper.
//the every return true or false here if all element are bigger then it's true otherwise false.
//in JavaScript dose not need to pass as argument to compare each other.

function palindrome(str){
    //palindrome with array helper method
    const rev = str.split("").every((char, num) => char === str[str.length - num -1]);
    const revreduce = str.split("").reduce((accumulator, currentvalue)=> currentvalue + accumulator,'');
    if(revreduce === str){
        console.log("palindrome with array reduce() helper");
    }else{
        console.log("not palindrome")
    }

    if(rev){
        console.log('palindrome with array every() helper');
    }else{
        console.log('not palindrome')
    }
    //refactor this palindrome program
    let reversedata = '';
    for( let char of str){
        reversedata = reversedata + char;
    }
    if(reversedata === str){
        console.log('palindrome with for of');
    }else{
        console.log('not palindrome');
    }
    //refactor with for loop;
    let revcontainer = '';
    for(let char = 0; char<str.length; char++){
        let chardata = str[char];
        revcontainer = chardata + revcontainer;
    }
    if(revcontainer === str){
        console.log('palindrome pure for loop');
    }else{
        console.log('not palindrome');
    }
}
palindrome("abcba");
