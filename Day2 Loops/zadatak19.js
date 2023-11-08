function degreeNumber() {
    let arrayNums = [];
    for(let i=1; i<=10; i++){
        result = 2 ** i;
        arrayNums.push(result);
        result = 0; 
    }
    return arrayNums;
}

console.log(degreeNumber());