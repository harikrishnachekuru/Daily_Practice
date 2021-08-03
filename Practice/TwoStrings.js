//String Problem
//String comparisions by each word in the string
//consider 2 strings and check the length -> If charecter matches then print Yes otherwise No.

function TwoStrings(s1, s2) {
    const string1 = {}
    for(let i = 0; i < s1.length; i++) {
        const s1char = s1[i];
        string1[s1char] = true;
    }
    for(let i = 0; i < s2.length; i++) {
        const s2char = s2[i];
        if(string1[s2char]) {
            return "Yes"; // If matches 
        }
    }
    return "No"; //If doesn't match'
}
const input1 = ['hello','world']; // Yes
const input2 = ['hi','world'];  // No

console.log(TwoStrings(input1[0], input1[1]));
console.log(TwoStrings(input2[0], input2[1]));