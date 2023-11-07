function printEvenNumbers(){
    var evenNums = [];
    for(var i=1; i <= 10; i++){
        if(i % 2 == 0) {
            evenNums.push(i);
        }
    }
    return evenNums;    
}

console.log(printEvenNumbers());