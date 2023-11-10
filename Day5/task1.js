function summTwoNums(a, b){
    return a - b;
}

console.log(summTwoNums(4, -5));

var cubes = [
    [1, 2, 3],
    [4, 5, 6],    
    [7, 8, 9],
   ];
   
   for(var i = 0; i < cubes.length; i++) {
       var cube = cubes[i];
       for(var j = 0; j < cube.length; j++) {
           console.log("cube[" + i + "][" + j + "] = " + cube[j]);
       }
   }
