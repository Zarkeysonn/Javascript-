function numOfCharacters(number) {
    if (number >= 0 && number <= 9) {
        return "Number has one digit"
    }
    else if(number >= 10 && number <= 99) {
        return "Number has two digits";
    }
    else if(number >= 100 && number <= 999) {
        return "Number has three digits";
    }
    else
        return "Number has four digits or has invalid value"
}

console.log(numOfCharacters(222));