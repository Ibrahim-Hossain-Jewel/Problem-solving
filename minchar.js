//find-out the minimum character used into string;
function minchar (str){
    var obj = {};
    var minchar = '';
    var min = 0;
    for(let char of str){
        if(obj[char]){
            obj[char]++;
        }else{
            obj[char] = 0;
        }
    }
    //Now read the data from object;
    for(let char in obj){
        if(obj[char]<=0){
            min = obj[char];
            minchar = char;
        }
    }
    return minchar;
}
console.log(minchar('data jewel'));