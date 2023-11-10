function arrayElementsInInterval(array, start, end) {
    let bul = false;
    for(let i in array) {
        if(i > end || array[i] < start){
            return false;

        } else
            return true;

    }
}

var array = [1,2,3,4,5,6];

console.log(arrayElementsInInterval(array, 2, 8));