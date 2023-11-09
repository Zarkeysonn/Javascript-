function findNumberInArray() {
    let arr = [1, 2, 3, 4, 5];
    let a = 4;
    for(var i in arr){
        if(arr.includes(a)){
            return "Number is found in array";

        }
        else return "There is no that number in array";

    }
}

console.log(findNumberInArray());
