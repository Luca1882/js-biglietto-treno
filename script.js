//Richiesta tramite 'Prompt informazioni Km età passeggero'

let utenteKm = prompt('Inserisci i km da fare');
let eta = prompt('Inserisci la tua età');

const prezzoBiglietto = 0.21; //Prezzo per km

let prezzoBase = utenteKm * prezzoBiglietto;

let sconto = 0;
if (eta < 18) {
    sconto = 0.20; //Sconto 20%
} else if (eta >= 65) {
    sconto = 0.40; //Sconto 40%
}

let prezzoFinale = prezzoBase * (1 - sconto); 
prezzoFinale = prezzoFinale.toFixed(2); //Arrotondo a due decimali

console.log(`Il prezzo finale è: €${prezzoFinale}`);