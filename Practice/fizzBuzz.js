// FizzBuzz example any ways of doing
//Ex: we have the form as we need to allow to print 3,5 in place of multiples as fizz ,buzz and 15 as fizzbuzz

// Without providing the valid value

// (function FizzBuzz(n) {
//     for(i=0; i<n; ++i) {
//         if(i%15 === 0){
//             console.log("FizzBuzz");
//         }if(i%3 === 0){
//             console.log("Fizz");
//         }else if(i%5 === 0){
//             console.log("Buzz");
//         }
//         else {
//             console.log(i);
//         }
//     }
// })(16);


// Another Format using of Array 

// console.log(
//     Array.apply(undefined, {length : 20}).map(function(_i, i) {
//         return ((++i %3 === 0 && "Fizz" || "") + (i %5 === 0 && "Buzz" || "")) || i ;
//     }).join("\n")
// )

// Another way using only Conditional with for loop

for(var i =1; 15>=i; ++i)
console.log(i%15!==0?i%5!==0?i%3==0?"fizz":i:"buzz":"fizzbuzz");