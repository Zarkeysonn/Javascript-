// const a = 5;
// const b = '5';

// console.log(a == b);
// console.log(a === b);

// var date1 = new Date("08/05/2015 23:41:20");
// var date2 = new Date("08/06/2015 02:56:32");

// var diff = date2.getTime() - date1.getTime();

// var msec = diff;
// var hh = Math.floor(msec / 1000 / 60 / 60);
// msec -= hh * 1000 * 60 * 60;
// var hours_to_minutes = msec;
// var mm = Math.floor(msec / 1000 / 60);
// msec -= mm * 1000 * 60;
// var ss = Math.floor(msec / 1000);
// msec -= ss * 1000;

// console.log(diff)
// console.log(hours_to_minutes)
// console.log(hh + ":" + mm + ":" + ss);
//var _initial = '2015-05-21T10:17:28.593Z';
var fromTime = new Date("08/05/2015 23:41:20");
var toTime = new Date("08/05/2015 23:43:20");

var differenceTravel = toTime.getTime() - fromTime.getTime();
var seconds = Math.floor((differenceTravel) / (1000));
console.log(seconds);