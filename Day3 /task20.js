function showDate() {
    let meseci = [
        { mesec: 'January', brojDana: 31 },
        { mesec: 'February', brojDana: 28 },
        { mesec: 'March', brojDana: 31 },
        { mesec: 'April', brojDana: 30 },
        { mesec: 'May', brojDana: 31 },
        { mesec: 'June', brojDana: 30 },
        { mesec: 'July', brojDana: 31 },
    ];
    for(let i = 0; i < meseci.length; i++){
        for(let j = 1; j <= meseci[i].brojDana; j++){
            console.log(j +". " + meseci[i].mesec)
        }
    }
}

showDate();
