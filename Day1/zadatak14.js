function afterMidnight(date1, date2) {
    var differenceTravel = date2.getTime() - date1.getTime();
    var seconds = Math.floor((differenceTravel) / (1000));
    return seconds;
}

console.log(afterMidnight(new Date("08/06/2015 00:03:20"), new Date("08/06/2015 00:00:00")));