const numeriRandom = generaNumeri();
const inputUtente = numeriUtente();

stampaNumeri(numeriRandom);

//utility

function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}

function generaNumeri(){
    const numeri = [];

    for(let i = 0; i < 5; i++){
        numeri.push(getRndInteger(1,100));
    }

    return numeri;
}

function stampaNumeri(numeri){
    const risultato = document.getElementById('numeri-random');
    risultato.textContent = numeri.join(" ");
}

function numeriUtente(){
    const inputUtente = [];

    for(let i = 0; i < 5; i++){
        let numero = prompt('inserisci un numero');
        inputUtente.push(parseInt(numero));
    }

    return inputUtente;
}

function indovinaNumero(inputUtente, numeriRandom){
    const numeriCorretti = [];

    for(let i = 0; i < 5; i++){
        if(inputUtente[i] === numeriRandom){
            numeriCorretti.push(inputUtente[i]);
        }
    }

    alert('hai indovinato' + numeriCorretti.length + 'numeri : ' + numeriCorretti.join(", "));
}