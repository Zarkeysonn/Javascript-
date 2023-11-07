function turnOnBoiler(time1) {
    if(time1 > "07/06/2015 22:00:00" && time1 < "08/06/2015 06:00:00"){
        return "Turn on boiler";
    } else 
        return "Turn off boiler";
}

console.log(turnOnBoiler(new Date("08/06/2015 00:03:20")));