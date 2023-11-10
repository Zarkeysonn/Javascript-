function returnFirstTenNumbersBiggerThanParam(n){
    var i = n;
    var counter = 0;
    var array = [];
    do {
        if(i % 2 == 0){
            array.push(i);
            counter++;
            i++;
        }
        else
            i++;
    }
    while(counter <= 9);
    return array;

}

console.log(returnFirstTenNumbersBiggerThanParam(6));
