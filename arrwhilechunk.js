//Now making array chunk with while loop
function chunk (arr, size){
    //To make an array into chunk in that time we have to use the array helper splice() method;
    let index = 0;
    const chunked = [];
    while(arr.length > index){
        let semichunk = arr.splice(index, size+index);
        chunked.push(semichunk)
    }
    return chunked;
}
console.log(chunk([1,2,3,4,5],2))