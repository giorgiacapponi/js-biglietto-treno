//informazioni utente
//chiedi quanti km percorre
//chiedi età
//prezzo del biglietto 0.21euro al km

const km = parseInt(prompt(' quanti chilometri percorri?'));
const age = parseInt(prompt('quanti anni hai?'));
const ticketPrice = ((km * 0.21).toFixed(2));
console.log( ticketPrice);
const ticket20 = ((ticketPrice * 0.8).toFixed(2));
console.log(ticket20);
const ticket40 = ((ticketPrice * 0.6).toFixed(2));
console.log(ticket40);



//logica applico sconto
//sconto 20% minorenni 
//sconto 40% over 65
let price='';
if (age < 18 ) {
   price= ticket20;
   console.log(price);
} else if (age > 65){
    price = ticket40;
    console.log(price);
} else {
    console.log(ticketPrice);
}

//output result
// prezzo arrotondato max due decimali
document .getElementById('travel-cost').innerHTML += (price);