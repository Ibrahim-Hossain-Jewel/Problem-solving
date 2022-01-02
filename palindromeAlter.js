//Palindromes are a string form if the string are reversed afterward the same form of the string. in short if I reversed a string afterward the same form of the string. Let's write a program.

function palindrome (str){
    for(const char of str){
       return char === str[str.length -1]
    }
}
console.log(palindrome("abba"));