function palindrome(str){
    let reversed = "";
    for(const character of str){
        reversed = character + reversed;
    }
    if (str === reversed){
        return true;
    }else{
        return false;
    }
}

palindrome("abbaas");
