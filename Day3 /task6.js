function increaseByOne(){
    let array = [1,2,3,4,5,6];
    let output = [];
    for(let i=0; i<array.length; i++){
        output.push((array[i] + 1));
    }
    return output;
}

console.log(increaseByOne());