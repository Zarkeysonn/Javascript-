function leapYear(year) {
    if(year % 4 === 0) {
        return "Your year is leap";

    } else
        return "year is not leap";

}

console.log(leapYear("2015"));
console.log(leapYear("2016"));
