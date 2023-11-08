function getSum(a,b){
    let sumA = 0;
    for(let i = 1; i <= b; i++){
        sumA += a;
    }
    // for(let j=1; j <= b; j++){
    //     sumB += b;
    // }

    return sumA;
     //+ sumB;
}

console.log(getSum(4,5));
