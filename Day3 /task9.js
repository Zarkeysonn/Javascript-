function showEveryOtherElement(){
    let array = [1,2,3,4,5,6,7,8,9,10];
    let output = [];
    for(let i=1; i < array.length; i+=2){
        output.push(array[i]);
    }
    return output;
}

console.log(showEveryOtherElement());