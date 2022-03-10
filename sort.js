//Sorting object value
const obj = [
    {name: 'ibrahim',value: 22},
    {name: 'jewel',value: 33},
    {name: 'hossain',value: 44},
    {name: 'abu khair', value: 1}
]
//sort by array object value;
// console.log(obj.sort((a,b) => a.value - b.value));

//sort by name with the sort prototype;
//console.log(obj.sort((omitedFirst, omitedLast) => omitedLast.name - omitedFirst.name))// sort return value is number; opon this line code doesn't work;
//writing code for sort string properties value;
const objStrSorted = obj.sort((a,b) => {
    console.log(a)
    //ignore the uppercase()
    const avalue = a.name.toUpperCase();
    const bvalue = b.name.toUpperCase();
    if(avalue>bvalue){
        return 1;
    }else if(avalue<bvalue){
        return -1;
    }
    return 0;
});
console.log(objStrSorted);