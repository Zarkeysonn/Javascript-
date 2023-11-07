function factorializeOfNumber(a) {
    if(a === 0 || a ===1){
        return 1;
    }
    for(let i=a-1; i >= 1; i--) {
        a = a * i; 
    }
    return a;
}

console.log(factorializeOfNumber(4));