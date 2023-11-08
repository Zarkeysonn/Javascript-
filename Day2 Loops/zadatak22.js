function divideBy7and13(){
    let array = [];
    let i = 1;
    do {
        if(i % 7 == 0 && i % 13 == 0)
        array.push(i);
        i++;
    } while ( array.length < 27)
    return array;
}

console.log(divideBy7and13());