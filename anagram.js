//what is anagram? when string one and string two character is same in that time anagram is true otherwise false;

//what does it? its checking two strings character are same or not if two string character are same in that time its true otherwise false;

//how much program are included to the anagram program. palindrome program reverse program and object sort program
function anagram(str1){
    //string to object generation;
    let obj1 = {};
    //let obj2 = {};
    for(let char of str1){
        if(obj1[char]){
            obj1[char] ++
        }       else{
            obj1[char] = 1;
        }
    }
    //access to the object value up here;
    
    console.log(obj1)


}
anagram('rail safety')