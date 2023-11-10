function returnMedianaFromArray(a) {
    //var a = [1,2,3,4,5,6];
    let counter = 0;
    let sum = 0;
    for(let i = 0; i < a.length; i++){
        sum += a[i];
        counter++;
    }
    let mediana = sum / counter;
    return mediana;

}
var a = [1, 2, 3];

console.log(returnMedianaFromArray(a));