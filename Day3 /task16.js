function findNumberInArray(a) {
    let arr = [1,2,3,4,5];
    for(let i in arr){
        if(i == a){
            return "Number is found in array";
            
        }
        else return "There is no that number in array";

    }
}