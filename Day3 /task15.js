function getArrayInterval(a,b) {
    let newArray = [];
        for(let i = a; i <= b; i++){
            newArray.push(i);
        }
    return newArray;

}

console.log(getArrayInterval(5,10));
