// Objective

// Today, we're discussing JavaScript functions. Check out the attached tutorial for more details.

// Task

// Implement a function named factorial that has one parameter: an integer,n.It must return the value of n! (i.e.,n factorial).

// Input Format

// Locked stub code in the editor reads a single integer, n from stdin and passes it to a function named factorial.

// Constraints
// 1<=n<=10

// Output Format

// The function must return the value of n!.

// Sample Input 0

// 4

// Sample Output 0

// 24

// Explanation 0

// We return the value of 4! = 4*3*2*1 =24.

function factorial(n) {
    let result;
    let i;
    let stepDownFromN = n;
    for (i = 1; i < n; i++) {
       if (stepDownFromN == n) {
           result = stepDownFromN * (stepDownFromN - 1)
       } else result = result * (stepDownFromN - 1)      
       stepDownFromN = stepDownFromN - 1;
    }
    return result;
}

//***2

const factorial = n => (n===1 ? 1: n*factorial(n-1));

//**3 

function factorial(n){
    if(n === 0){
        return 1;
    } else{
        return n * factorial(n-1);
    }
}

//Examples for functions and formations 
//1 

let name = "harry";
let a,b = 12;

function greetings(name) {
    console.log("Hello, " + name);
}

function sum(a, b) {
    return a + b;
}

function main(name, a, b) {
    greetings(name);
    console.log(sum(a, b));
}

//2. Function Expression.

function main(input) {

    /**
    *   Defines an unnamed function and assigns it to a variable named square. 
    *   @param {Number} x
    *   @returns {Number} The value of argument squared.         
    **/
    var square = function(x) {
        return x * x;
    };

    // Print the value returned by passing input as x to the 
    // anonymous function referenced by variable square
    console.log(square(input));
}

//3. Names Function Expression

function main(factN, fibN) {

    /**
    *   Defines a named recursive function as a property of the math variable. 
    *   @param {Number} n
    *   @returns {Number} The value of n factorial.         
    **/
    var math = {
        // Declare the factorial property
        factorial: 
            // Declare the function as the property's value
            function factorial(n) {
                if (n > 1) {
                    return n * factorial(n - 1);
                }
                // Returns 1 if n <= 1
                return 1;
            }
    };

    /**
    *   Defines a named recursive function referenced by the fib variable. 
    *   @param {Number} n
    *   @returns {Number} The value of fibonacci(n).         
    **/
    var fib = function fibonacci(n){
        if (n > 2) {
            return fibonacci(n - 1) + fibonacci(n - 2);
        }
        else if (n < 1) {
            return 0;
        }
        // else, return 1
        return 1;
    }

    // Print the value returned by passing factN as n to the 
    // function referenced by variable math:
    console.log(math.factorial(factN));
    // and by passing fibN as n to the function referenced by variable fib:
    console.log(fib(fibN));

}