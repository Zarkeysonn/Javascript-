function afterMidnight(date1, date2) {
    var diff = date2.getTime() - date1.getTime();  

   var msec = diff;
    var ss = Math.floor(diff / 1000);
    msec = ss * 1000;
    return -ss;
   // var diff = date2.getTime() - date1.getTime();

    // var msec = diff;
    // var hh = Math.floor(msec / 1000 / 60 / 60);
    // msec -= hh * 1000 * 60 * 60;
    // var mm = Math.floor(msec / 1000 / 60);
    // msec -= mm * 1000 * 60;
    // var ss = Math.floor(msec / 1000);
    // msec -= ss * 1000;
    // return msec;
}

console.log(afterMidnight(new Date("08/06/2015 00:03:20"), new Date("08/06/2015 00:00:00")));