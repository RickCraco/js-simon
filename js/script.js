const numeriRandom = generaNumeri();


//utility

function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}

function generaNumeri(){
    const numeri = [];

    for(let i = 0; i < 5; i++){
        numeri.push(getRndInteger(1,100));
    }
}