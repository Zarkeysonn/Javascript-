function calculateQuarter(currDate) {
    if ((currDate > "2011-01-01T00:00:00") && (currDate < "2011-04-01T00:00:00")){
        return "It's 1st quarter of the year";
    } 
    else if ((currDate >= "2011-04-01T00:00:00") && (currDate < "2011-07-01T00:00:00")){
        return "It's 2nd quarter of the year";
    }
    else if ((currDate >= "2011-07-01T00:00:00") && (currDate < "2011-10-01T00:00:00")) {
        return "It's 3rd quarter of the year";
    } else
        return "It's 4th quarter of the year";
}

console.log(calculateQuarter(new Date().getMonth()+1));