function multiplyToTen(a) {
    let stringOfNumbers = [];
    for(let i = 1; i <= 10; i++) {
        sum = a * i;
        stringOfNumbers.push(sum);
    }
    return stringOfNumbers;

}

console.log(multiplyToTen(7));
