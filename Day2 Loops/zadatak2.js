function printNumbers20To30() {
    let numbers = [];
    let i = 20;
    while(i >= 20 && i <=30) {
        numbers.push(i);
        i++;
    }
    return numbers;
}

console.log(printNumbers20To30());