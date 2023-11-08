function reverseArray() {
    let array = ['Danilo','je', 'ogledala', 'pisac'];
    let revese = [];
    for(let i=array.length - 1; i>=0; i--){
        revese.push(array[i]);
    }
    return revese;
}

console.log(reverseArray());