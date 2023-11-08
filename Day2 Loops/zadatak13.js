function concatenateString(a) {
    let str = " ";
    for(let i = 1; i <= 10; i++) {
        //sum = a * i;
        str += a * i + " ";
    }
    return str;

}

console.log(concatenateString(7));
