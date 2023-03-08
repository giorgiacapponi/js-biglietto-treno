//informazioni utente
//chiedi quanti km percorre
//chiedi età
//prezzo del biglietto 0.21euro al km

let km = parseInt(prompt(' quanti chilometri percorri?'));
//verifica sia un numero
if ( isNaN(km)){
  km =  parseInt(prompt('inserisci i km con  un numero!'));
 }
console.log('i chilometri sono', km);

let age = parseInt(prompt('quanti anni hai?'));
//verifica sia un numero
if (isNaN(age)){
    age = parseInt(prompt('inserisci la tua età con un numero!'));
}
console.log("l'età è",age)

const ticketPrice = (km * 0.21);
console.log( 'prezzo intero',ticketPrice);
const ticket20 = (ticketPrice * 0.8);
console.log('prezzo scontato 20%',ticket20);
const ticket40 = (ticketPrice * 0.6);
console.log('prezzo scontato 40%',ticket40);



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
    price = ticketPrice;
    console.log(ticketPrice);
}

//output result
// prezzo arrotondato max due decimali
document .getElementById('travel-cost').innerHTML += (price.toFixed(2))+'€';