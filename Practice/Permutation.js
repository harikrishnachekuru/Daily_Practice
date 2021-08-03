//permutations is strings with same characters,same number os charecters and it also allows for different positions in the sequence.

/**
 * Logic
 * 
 * check the strings are equal or not
 * check the length of the string is same or different 
 * create a object for each
 * Loop it for the count if the object have charecter count are equal then return false
 * otherwise return true.
 */

//create variables

const A= "Pulse";
const B= "esluP";
const C= "Brad";

// creating an object 

const isObj = (str) => {
    //object
    let obj = {};
    //Loop over the characters
    for(let i of str)
    (!obj[i]) ? obj[i]=1 : obj[i]++;
    return obj; 
}
//creating function 

const isPermutation = (str1,str2) => {
    //check if they are same or different
    if(str1 === str2)
    return true;
    else{
        //check the length of the strings
        if(str1.length !== str2.length) 
        return false;
        else {
            //create object instances
            const obj1 = isObj(str1);
            const obj2 = isObj(str2);
            
            //check if charecter count same or different
            for(let i in obj1) {
                if(obj1[i] !== obj2[i])
                return false;
            }
        }
    }
    return true;
}

console.log({
    isPermutation: isPermutation(A,C)
})