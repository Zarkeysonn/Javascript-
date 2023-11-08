function intervalNumbersDivideBy3(start,end) {
    let counter = 0;
    for(let i = start; i <= end; i++) {
        if(i % 3 === 0){
            counter++;
        }
    }
    return counter;
    
}

console.log(intervalNumbersDivideBy3(19,25));
