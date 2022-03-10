//what is anagram? when string one and string two character is same in that time anagram is true otherwise false;

//what does it? its checking two strings character are same or not if two string character are same in that time its true otherwise false;

//how much program are included to the anagram program. palindrome program reverse program and object sort program and Object.Keys() and punctuation removing way;
function anagram(str1, str2){
    if(str1.length === str2.length){
        //string to object generation;
        let obj1 = {};
        let obj2 = {};
        //obj1 generator;
        for(let char of str1){
            if(obj1[char]){
                obj1[char]++;
            }else{
                obj1[char] = 1;
            }
        }
        //obj2 generator;
        for(let char of str2){
            if(obj2[char]){
                obj2[char]++;
            }else{
                obj2[char] = 1;
            }
        } 
        //bringing out key value pair of obj1
        console.log( (Object.keys(obj2).sort()).join('') === (Object.keys(obj1).sort()).join('') );
        //bringing out key value pair of obj1; to bringing out the object key value you need to use for in loop

    }else{
        return false;
    }


}
anagram('rail safety', 'fairy tales');