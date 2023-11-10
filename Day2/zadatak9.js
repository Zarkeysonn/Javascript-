function maxNum(a,b,c) {
    max = 0;
    if(max <= a && a >= b && a >= c) {
        max = a;
    }
    else if(max <= b && b >= a && b >= c) {
        max = b;
    }
    else if (max <= c && c >= a && c >= b) {
        max = c;
    }
    else return "Please provide valid values for ny=umbers";

    return max;

}

function  minNum(a,b,c) {
    let min = 0;
    if(min <= a && a <=b && a <= c) {
        min = a;
    }
    else if(min <= b && b <= a && b <= c) {
        min = b;
    }
    else if(min <= c && c <= a && c <= b) {
        min = c;
    }
    else
        return "Please provide valid value for numbers";

    return min;

}

console.log(maxNum(7,6,15));
console.log(maxNum(7,6,"Wrong input"));

console.log(minNum("3",0,1));
