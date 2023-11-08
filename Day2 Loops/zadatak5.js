function oddNumbersWithForLoop(){
    let oddNums = [];
    for (let i = 0; i <= 10; i++){
        if(i % 2 !== 0){
            oddNums.push(i);
        }
    }
    return oddNums;

}

console.log(oddNumbersWithForLoop());
