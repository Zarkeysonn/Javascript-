function getBiggerArray(){
    let a = [1,2,3,2,4,5];
    let b = [1,2,3];
    if(a.length > b.length){
        return a;
        
    }
    else
        return b;

}

console.log(getBiggerArray());
