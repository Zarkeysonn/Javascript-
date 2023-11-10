function countNumInArray(arr, a){
    let counter = 0;
    for(let i = 0; i < arr.length; i++){
        if(arr[i] == a){
            counter++
        }
    }
    return counter;

}

let arr = [1,2,3,4,5,6,5,5,5,5];

console.log(countNumInArray(arr, 5));
