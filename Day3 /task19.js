function assignKeyValues(){
    let a = ['ime', 'prezime', 'datum_rodjenja', 'godiste', 'pol', 'jmbg', 'visina', 'tezina', 'sport', 'struka'];
    let b = ['Zarko', 'Djurdjev', '27/06/98', '1998', 'ono drugo', '2706988040209', '80', 'stoni tenis', 'informaticar'];
    let c = {};
    a.forEach((element, index) => {
        c[element] = b[index];
    });
    return c;

}

console.log(assignKeyValues());
