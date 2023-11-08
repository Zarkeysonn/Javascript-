function showElementsOfArray(){
    let colors = ['white', 'green','red','blue','black'];
    let outputArray = [];
    for (const c of colors) {
        outputArray.push(c);
    }
    return outputArray;
}

console.log(showElementsOfArray());