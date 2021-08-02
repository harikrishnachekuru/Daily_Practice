// Chunked Array means devided the array with alloted value base 
//ex: [1,2,3,4,5,6,7,8,9] if alloted data will be 3 then the output will be [[1,2,3],[4,5,6],[7,8,9]]

// 1. create a new array
//2. create variable and store 
//3. if element availble push to the empty array else push to the created variable
//4. print the function

const chunck = ((arr,n) => {
    // array
    const chuncked = [];
    
    //checking of data in the Array
    for(let elem in arr) {
        //creating variable 
        let last = chuncked[chuncked.length - 1];
        //checking with alotted data
        if(!last || last.length === n) {
            //If matches then push to the chuncked Array.
            chuncked.push([elem]);
        }
        else
        //push to the last variable
        last.push(elem);
    }
    //retun the data of Array
    return chuncked;
})([1,2,3,4,5,6,7,8,9],4);

console.log({chunck})