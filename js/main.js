function getUserInfo() {

    // chiede nome del passeggero 
    const completeName = document.getElementById(`completeName`).value;
    console.log(`Nome: ` ,completeName);
    // stampa l'input nella pagina
    document.getElementById(`outputName`).innerHTML = completeName;

    // chiede numero di km che il passeggero ha intenzione di percorrere
    const kmNumber = Number(document.getElementById(`kmNumber`).value);
    console.log(`Numero km: ` ,kmNumber);
    
    // chiede l'età del passeggero
    const age = document.getElementById(`age`).value;
    // stampa l'input nella console
    console.log(`Età dell'utente: `,age);
    
    // assegna il valore 0.21 alla costante priceMultiplier
    const priceMultiplier = Number(0.21);
    // calcola il prezzo del biglietto moltiplicando il numero di km inseriti dall'utente per 0,21
    let fullPrice = (kmNumber * priceMultiplier).toFixed(2);
    // stampa il risultato nella console 
    console.log (`Prezzo seza sconto: `,fullPrice);

    /* 
    -Se l'età del passeggero è <18 viene applicato uno sconto del 20% sul prezzo del biglietto calcolato in precedenza
    -Se l'età del passeggero è >65 viene applicato uno sconto del 40% sul prezzo del biglietto calcolato in precedenza
    -Se l'età del passeggero è >= 18 e <= 65 non viene applicato nessuno sconto */
    if (age == `minorenne`){
        let discountPrice = (fullPrice - (fullPrice * 0.2)).toFixed(2);
        console.log(`Prezzo scontato: `,discountPrice);
        document.getElementById(`price`).innerHTML = discountPrice;
        document.getElementById(`offerType`).innerHTML = `Biglietto Ridotto Minorenni`;

    } else if (age == `pensionato`){
        let discountPrice = (fullPrice - (fullPrice * 0.4)).toFixed(2);
        console.log(`Prezzo scontato: `,discountPrice);
        document.getElementById(`price`).innerHTML = discountPrice;
        document.getElementById(`offerType`).innerHTML = `Biglietto Ridotto Pensionati`;
    } else {
        document.getElementById(`price`).innerHTML = fullPrice;
        document.getElementById(`offerType`).innerHTML = `Biglietto Standard`;
    }

    let trainWagon = Math.floor(Math.random() * 10) + 1;
    document.getElementById(`trainWagon`).innerHTML = trainWagon;

    let cpCode = Math.floor(Math.random() * 99999);
    document.getElementById(`cpCode`).innerHTML = cpCode;

}

let subButton = document.getElementById('subButton');
    subButton.addEventListener('click', getUserInfo, false);