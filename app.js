function reverse(str){
    let reversed = "";
    for(const character of str){
        reversed = character + reversed;
    }
    return reversed;
}
console.log(reverse("Hello"));
//How to rename of a branch => First switch to the branch name and then git branch -m newBranchName