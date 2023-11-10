function sumArrays(){
    let a = [1, 2, 3];
    let b = [4, 5, 6];
    let sum = 0;
    for(let i = 0; i < a.length; i++) {
        sum += a[i] + b[i];
    }
    return sum;
}

function summArrayForEach() {
    let a = [1, 2, 3];
    let b = [4, 5, 6];
    let sum = 0;
    a.forEach(ele => {
        sum += ele;
    });
    b.forEach(ele2 => {
        sum += ele2;
    });
    return sum;
}

console.log(sumArrays());
console.log(summArrayForEach());
