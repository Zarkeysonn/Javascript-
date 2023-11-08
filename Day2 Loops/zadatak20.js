function fibonacciSequence() {
    let arrayNums = [0,1];
    for(i=2; i<=20;i++){
        arrayNums[i] = arrayNums[i-2] + arrayNums[i-1];
        arrayNums.push(arrayNums[i]);
    }
    return arrayNums;
}

console.log(fibonacciSequence());