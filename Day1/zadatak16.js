function squaringValueWithPow(a) {
    let square = Math.pow(a, 2);
    return square;
}

function squaringValueWithMultiplication(a) {
    return a * a;

}

function squaringValueWithExponentiationOperator(a) {
    return a ** 2;
}

console.log(squaringValueWithPow(5))

console.log(squaringValueWithMultiplication(4))

console.log(squaringValueWithExponentiationOperator(3))