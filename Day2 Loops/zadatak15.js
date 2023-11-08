function wordsInsteadNumbers() {
    let arrayNums = [];
    for(let i=1; i<=100;i++) {
        if(i % 3 === 0 && i % 5 === 0) {
            arrayNums.push("FizzBuzz");
        }
        else if(i % 3 === 0 && i % 5 !== 0){
            arrayNums.push("Fizz");
        }
        else if(i % 3 !==0 && i % 5 === 0){
            arrayNums.push("Buzz");
        }
        else arrayNums.push(i);
    }
    return arrayNums;
}

console.log(wordsInsteadNumbers());