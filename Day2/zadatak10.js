function fromLowestToHighest(a,b,c) {
    if(a <= b && a <= c && b <= c) {  // a,b,c
        return "[" + a + ", " + b + ", " + c + "]";
    }
    else if(b <= a && b <= c && a <= c) {  // b,a,c
        return "[" + b + ", " + a + ", " + c + "]";
    }
    else if(c <= a && c <= b && a <= b) {  //c,a,b
        return "[" + c + ", " + a + ", " + b + "]";
    }        
    else if(a <= b && a <= c && c <= b) {  //a,c,b
        return "[" + a + ", " + c + ", " + b + "]";
    } 
    else if(b <= a && b <= c && c <= a) {  //b,c,a
        return "[" + b + ", " + c + ", " + a + "]";
    }
    else if(c <= a && c <= b && b <= a) {
        return "[" + c + ", " + b + ", " + a + "]";
    }
    else
        return "Please provide valid values";
}

console.log(fromLowestToHighest(5,4,3));
console.log(fromLowestToHighest(15,24,333));