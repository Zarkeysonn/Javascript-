function primeNumbers(){
    let primeNumbers = [];
    let count = 0;
    for(i = 2; i <= 100; i++) {
        num = i;
        for(j = 1; j <= i; j++){
            if(i % j == 0){
                count++;
            }
        }
        if(count == 2){
            primeNumbers.push(i);
        }
        count = 0;
    }
    return primeNumbers;
}

console.log(primeNumbers());