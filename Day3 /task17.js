function findBiggestNumber() {
    let arr = [1,2,3,4,123,54,45656,71];
    let max = 0;
    for(let i=0; i < arr.length; i++){
        if(arr[i] > max){
            max = arr[i];
        }
    }
    return max;

}

console.log(findBiggestNumber());
