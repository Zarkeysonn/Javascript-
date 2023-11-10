function duplexUnit(){
    let array = [1,2,3,4,5,6];
    let output = [];
    for(let i = 0; i < array.length; i++){
            output.push(array[i]);
            output.push(array[i]);
    }
    return output;

}

console.log(duplexUnit());
