function returnIndexOfSmallestNumber(arr){
    
    let smallest = arr[0];
    for(let i = 0; i < arr.length; i++) {
        if(arr[i] < smallest){
            smallest = arr[i];
        }
    }
    let index = arr.indexOf(smallest);
    return index;

}

arr = [1,2,6,-1,5, -3];


console.log(returnIndexOfSmallestNumber(arr));
