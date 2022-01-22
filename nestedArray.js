console.log("Reading nested array using map!");
const nested = [[11,22,33,44],[55,66,77,88]];
//How to read a nested array using map() here one condition here don't have to be a single number in the array. if the array are present in another way in that case need your another method.
nested.map(wholeArray =>{
    return wholeArray.map(allArrElm => console.log(allArrElm*2));
})