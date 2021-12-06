function reverse(str){
    //make a reverse program using array helper.
    let reversed = "";
    for(var num = 0; num<str.length;num++){
       reversed =  str[num] + reversed;
       debugger;
    }
    return reversed;
}
reverse("Hello");
//How to rename of a branch => First switch to the branch name and then git branch -m newBranchName

//return str.split("").reduce((reversed, character)=> character + reversed,"m");