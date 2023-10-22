function generaNumeriRandom(){
    const numeri = [];

    for(let i = 0; i < 5; i++){
        numeri.push(getRndInteger(1,5));
    }

    return numeri;
}

function stampaNumeri(numeri){
    const divNumeri = document.getElementById("numeri");
    divNumeri.textContent = numeri.join();
}

function indovinaNumeri(numeriRandom){
    const inputUtente = [];
    const numeriCorretti = [];

    for(let i = 0; i < 5; i++){
        let numero = parseInt(prompt("inserisci un numero"));
        inputUtente.push(numero);
    }

    for(let i = 0; i < 5; i++){
        if(numeriRandom.includes(inputUtente[i])){
            numeriCorretti.push(inputUtente[i]);
        }
    }

    alert('hai indovinato' + numeriCorretti.length + "numeri : " + numeriCorretti.join(", "));
}

//utility

function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}

const numeriRandom = generaNumeriRandom();
stampaNumeri(numeriRandom);

setTimeout(function(){
    document.getElementById("numeri").textContent = "";
    indovinaNumeri(numeriRandom);
}, 5000);