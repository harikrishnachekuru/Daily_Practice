// Objective

// In this challenge, we practice looping over the characters of string. Check out the attached tutorial for more details.

// Task

//    1. First, print each vowel in s

// on a new line. The English vowels are a, e, i, o, and u, and each vowel must be printed in the same order as it appeared in s

// 2.Second, print each consonant (i.e., non-vowel) in s
// on a new line in the same order as it appeared in s

//     .

// Function Description

// Complete the vowelsAndConsonants function in the editor below.

// vowelsAndConsonants has the following parameters:

//     string s: the string to process

// Prints

//     Print each vowel of s in order on a new line, then print each consonant in order on a new line. Return nothing.

// Input Format

// There is one line of input with the string s

// .

// Output Format

// First, print each vowel in s
// on a new line (in the same order as they appeared in s). Second, print each consonant (i.e., non-vowel) in s on a new line (in the same order as they appeared in s).

// Sample Input 0

// javascriptloops

// Sample Output 0

// a
// a
// i
// o
// o
// j
// v
// s
// c
// r
// p
// t
// l
// p
// s

// Explanation 0

// Observe the following:

//     Each letter is printed on a new line.
//     Then the vowels are printed in the same order as they appeared in s.
// Then the consonants are printed in the same order as they appeared in s
// .
//1.
function vowelsAndConsonants(s) {
    const vowels = 'aeiou';
    var consonants = '';
    
    for(var i = 0; i < s.length; i++) {
       if (vowels.includes(s[i])) {
           console.log(s[i]);
       }
       else {
           consonants += s[i] + '\n';
       }
    }
    
    console.log(consonants.trim());
}

//2.

function vowelsAndConsonants(s) {
    let consonants = ''
    let vowels = 'aeiou';
    for (let letter of s) {
        vowels.includes(letter) ? console.log(letter) : consonants += letter + '\n';
    }
    console.log(consonants.trim());
}

//3. by using Regex 

function vowelsAndConsonants(s) {
    const vowels =  s.match(/[aeiou]/gi).join('\n')

  const others = s.match(/[^aeiou]/gi).join('\n')

  console.log(vowels.concat('\n', others));   
}

//4. Expandable with forEach function

function vowelsAndConsonants(s) {
    [...s].forEach(c => 'aeiou'.includes(c) ?
        console.log(c) : null);
    [...s].forEach(c => 'aeiou'.includes(c) ?
        null : console.log(c));
}

//5. simpler foreach 

function vowelsAndConsonants(s) {
    const vowels = [];
const consonants = [];
s.split('').forEach(function(o) {
 if (['a','e','i','o','u'].indexOf(o) != -1) {
  vowels.push(o);
 } else {
  consonants.push(o);
 }
})
console.log(vowels.join('\n'));
console.log(consonants.join('\n'));
}
