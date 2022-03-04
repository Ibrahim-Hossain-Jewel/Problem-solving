//findout the maximum character;
function maxChar (str){
    let objMap = {};
    let frequencyChar = '';
    let maxNumber = 0;
    for(let i of str){
        if(objMap[i]){
            objMap[i]++;
        }else{
            objMap[i] = 1;
        }
    }
    //extract the properties value;
    for(let char in objMap){
        if(objMap[char] > maxNumber){
            maxNumber = objMap[char];
            frequencyChar = char;
        }
    }
    console.log(frequencyChar);
}
maxChar("jewel")