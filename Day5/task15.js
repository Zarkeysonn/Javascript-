function showAllElements(a) {
    var jarray = [];
    for (let b of a){
        for (let element of b){
            console.log(element);
        }
    }
}

function createNewArray(a){
    var c = [];
    for(let i = 0; i < a.length; i++){
        let d = [];
        for(let j = 0; j < a[i].length; j++){
            d.push(a[i][j]);
        }
    c.push(d);
    }
    return c;
}




let a = [
    [1,2,3],
    [4,5,6]
];

console.log(createNewArray(a));

console.log(showAllElements(a));
   