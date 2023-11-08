function divide3And7(start,end) {
    let counter3 = 0;
    let counter7 = 0;
    for(let i = start; i <= end; i++) {
        if(i % 3 === 0 && i % 7 === 0){
            counter3++;
            counter7++;
        }
        else if (i % 3 === 0 && i % 7 !== 0){
            counter3++;
        }
        else if(i % 3 !== 0 && i % 7 === 0){
            counter7++;
        }
    }
    return "Counter divide by 3 " + counter3 +
            "\nCounter divide by 7 " + counter7;
            
}

console.log(divide3And7(20,30));
