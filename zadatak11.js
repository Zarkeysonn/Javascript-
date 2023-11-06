

function doTheMath(a,b){
    if(a < 0 && b < 0){
        return "Ne dam ti da oba budu negativna :P"
    }
    else {
        if(a > b) {
            return a - b;
        } else return b - a;
    }
}

console.log(doTheMath(7, -17))