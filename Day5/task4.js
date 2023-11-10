var myArray = [1,23,234,34,24,3,5];

function smallestInArray(myArray){
    let minimum = myArray[0];
    for(let i = 0; i <= myArray.length; i++){
        if(minimum > myArray[i]){
            minimum = myArray[i];
        }
    }
    return minimum;

}

console.log(smallestInArray(myArray));
