function multiplyParameters(a) {
    var sum = 1;
    for (n of a) {
        sum *= n;
    }
    return sum;

}

var a = [1, 23, 4, 5];


console.log(multiplyParameters(a));