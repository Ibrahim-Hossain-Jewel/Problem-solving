//solve a palindrome problem the help of every() array helper.
//the every return true or false here if all element are bigger then it's true otherwise false.
//in JavaScript dose not need to pass as argument to compare each other.

function palindrome(str){
    str.split("").every((char,index)=>{
        if(char === str[str.length - index -1]){
            console.log("Palindrome");
        }
    })
}
palindrome("HeleH");