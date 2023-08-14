
function prepareYourInputArray(arrayLength) {
    const numbersArray = [];
    
    for(let i = 0; i<arrayLength ; i++){
        numbersArray.push(i)
    }
    return numbersArray;
}

function pushFunction(inputArray) {
    inputArray.push(inputArray.length+1)
}
function unshiftFunction(inputArray) {
    inputArray.unshift(inputArray.length+1)
}
function popFunction(inputArray) {
    inputArray.pop()
}
function shiftFunction(inputArray) {
    inputArray.shift()
}



const inputArray = prepareYourInputArray(100000000);

const startTime = performance.now();
shiftFunction(inputArray);
const stopTime = performance.now();
const elapsedTime = stopTime - startTime;




console.log({elapsedTime});
