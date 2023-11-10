function intervalNumbers(start,end){
    let nums = [];
    while(start <= end){
        nums.push(start);
        start++;
    }
    return nums;

}

console.log(intervalNumbers(5,10));
