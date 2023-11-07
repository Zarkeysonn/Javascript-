function evenNumber(num) {
    if(num % 2 === 0) {
        return "Your number is even";
    } else
        return "Number is not even";
}

console.log(evenNumber("Some string"));
console.log(evenNumber("14"));