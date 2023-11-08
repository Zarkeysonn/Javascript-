function throwCube() {
    let counter = 0;
    do {
        number = Math.floor(Math.random() * 6) + 1; //random number from 1 - 6
        counter++;    
    } while(number !== 6);
    return counter;
}

console.log(throwCube());