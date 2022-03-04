var scores = [1, [2, 7, [8, 10]], [13, 47], [55, 77]];
// it's important for this function to have a name so we can refer to itself in the function body
//Applying a recursion function to extract all nested array element
scores.map(
    function mapper(s){
        if(Array.isArray(s)){
            return s.map(mapper)
        }else{
            console.log(s);
        }
    }
)