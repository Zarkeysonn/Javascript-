function returnOddNumbersFromArray(a, b) {
    let oddNums = [];
    for(let i = a; i <= b; i++) {
        if(i % 2 !== 0){
            oddNums.push(i);
        }
    }
    return oddNums;

}

console.log(returnOddNumbersFromArray(5,10));


