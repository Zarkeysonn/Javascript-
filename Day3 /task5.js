function showArrayElements(){
    let array = ['mama', 'tata', 'danilo','mica'];
    let output = [];
    for (let index = 0; index < array.length; index++) {
        output.push(array[index]);
    }
    return output;
}

console.log(showArrayElements());