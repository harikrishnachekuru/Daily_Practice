// Integer Reverse 

// 1.convert to string 
//2.Create/turn an Array
//3. reverse it
//4. back to string and join 
//5. Back to Int again.

const reverseInt = (n) => {
    // -1 is multiplied if any value with negitive will get to possitive and ParseInt is used to convert the string to integer number.
    if (n<0)
        return -1 * parseInt(n.toString().split('').reverse().join(''));
    return parseInt(n.toString().split('').reverse().join(''));
}
console.log({

    testcase_1: reverseInt(51),
    testcase_2: reverseInt(500),
    testcase_3: reverseInt(982),
    testcase_4: reverseInt(-192)
})