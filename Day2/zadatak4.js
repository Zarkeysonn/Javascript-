function doDesiredOperation(operation, a, b) {
    if(operation == "sum") {
        let result = a + b;
        return result;
    }
    else if(operation == "subtraction") {
        let result = a - b;
        return result;
    }
    else if(operation == "multiply") {
        let result = a * b;
        return result;
    }
    else if(operation == "divide") {
        let result = a / b;
        return result;
    }
    else return "Provide valid function";
}

console.log(doDesiredOperation("summm", 5, 4));