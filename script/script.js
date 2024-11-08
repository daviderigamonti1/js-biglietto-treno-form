/*

Scrivere un programma che chieda all’utente:
- Il numero di chilometri da percorrere
- Età del passeggero
Sulla base di queste informazioni dovrà calcolare il prezzo totale del biglietto di viaggio, secondo le seguenti regole:
- il prezzo del biglietto è definito in base ai km (0.21 € al km)
- va applicato uno sconto del 20% per i minorenni
- va applicato uno sconto del 40% per gli over 65.

*/

"use strict";
console.clear();

const age = parseInt(document.getElementById("age").value);
const km = parseInt(document.getElementById("km").value);
let basePrice = 0.21 * km;
let price;

if (age < 18) {
    //Sconto del 20%
    price = basePrice * 0.8;
} else if (age >= 65) {
    //Sconto del 40%
    price = basePrice * 0.6;
} else {
    price = basePrice;
}

document.getElementById("result").innerText = `Prezzo biglietto: ${price.toFixed(2)}€`;



