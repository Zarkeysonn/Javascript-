function createArray(){
    let months = ['January', 'February','March','April','May','June','July','August','September','October','November','December'];
    let output = [];
    for (const M of months) {
        output.push(M);
    }
    return output;
    
}

console.log(createArray());
