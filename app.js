function reverse(str){
    let reversed = "";
    for(const character of str){
        reversed = character + reversed;
    }
    return reversed;
}
console.log(reverse("Hello"));