function medianaValue(){
    let array = [1,2,3,4,5,6];
    let counter = 0;
    let sum = 0;
    let mediana;
    for(let i = 0; i < array.length; i++){
        sum += array[i];
        counter++;
    }
    mediana = sum / counter;
    return mediana;

}

console.log(medianaValue());
