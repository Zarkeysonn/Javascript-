function divideBy3Counter() {
    let count=0;
    for(let i = 1;i <= 100; i++) {
        if(i % 3 === 0) {
            count++;
        }
    }
    return count;
    
}

console.log(divideBy3Counter());
