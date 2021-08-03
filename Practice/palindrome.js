// Palindrome is works with reversing of string which gives the same as the original

//1. Reverse string
//2. Compare with original string

// Method -1 

//create a string 
//split it and reverse to store in variable
//join the stored string with variable

const palindrome = (str) => {
    //we can do it single by single or can directly do in single line
    //const isPalindrome = str.split('');
    //isPalindrome.reverse();
    //str = isPalindrome.join('');
    //The single line form is the same as

    //Split the string then reverse it and join the string. 
    const isPalindrome = str.split('').reverse().join('');

    //Checking the string 
    console.log(str === isPalindrome);
}
palindrome('abab')


//Method -2 

//By Using Annonymous function we can check as 

(function (str) {
    // creating a variable 
    let reversedData = '';

    //Checking the string elem
    for(let x of str) 
    {
        reversedData = x+reversedData;
    }
    console.log(str === reversedData)
})("AbbA");