var a = [1, 23, 12, 4, 23, 12];

function sumOfArrayNumbers(a){
    var sum = 0;
    for (n of a) {
        sum += n;
    }
    return sum;

}

console.log(sumOfArrayNumbers(a));