//Array chunking here.
function chunk (arr, size){
    let chunked = [];
    for(let element of arr){
        let last = chunked[chunked.length - 1];
        if(!last || last.length === size){
            chunked.push([element]);
        }else{
            last.push(element);
        }
    }
    console.log(chunked)
}
chunk([1,2,3,4,5,6,7,8],2);