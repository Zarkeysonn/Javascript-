var a = 5;
var b = '5';

function f() {
    if ( a === b) {
        return "Promenljive su istog tipa i iste vrednosti";
    } else if (a == b){
        return "Promenljive su istog tipa";
    }
    else {
        return "Promenljive nisu istog tipa i vrednosti"
    }
}

console.log(a);
console.log(b);
console.log(a == b);
console.log(a === b);
console.log(f()); 


