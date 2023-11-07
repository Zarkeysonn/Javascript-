function biggerThanSum(a,b) {
    if ((a + b) > (a * b)){
        return "Sum is bigger than multiply"
    } else
        return "Multiply is bigger than sum"
}

console.log(biggerThanSum(1,2));
