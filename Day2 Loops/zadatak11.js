function exponentiationNum(a,b) {
    let counter = 0;
    for(let i = 1; i <= b; i++) {
        counter++;
    }
    return a ** counter;
}

console.log(exponentiationNum(2,5));
