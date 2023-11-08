function oddOrEvenArray(){
    let odd = []; //neparni
    let even = []; //parni
    for(let i=0; i<=100;i++){
        if(i % 2 == 0){
            even.push(i);
        }
        else
            odd.push(i);
    }
    return [odd, even];
}

console.log(oddOrEvenArray());