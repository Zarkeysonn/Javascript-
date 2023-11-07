function showOddNumbers(){
    let oddNums = [];
    let i = 0;
    while (i <= 10) {
        if(i % 2 !== 0){
            oddNums.push(i);
        }
        i++;
    }
    return oddNums;
}

console.log(showOddNumbers());