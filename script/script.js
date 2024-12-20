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

// refs - nodi HTML
const age = document.getElementById("age");
const km = document.getElementById("km");
const login = document.getElementById("login");
const name = document.getElementById("name");
let offert = document.getElementById("offert")

// Attesa di interazione utente - invio form
login.addEventListener('submit', function(event) {
    event.preventDefault();
    const ageValue = parseInt(age.value);
    const kmValue = parseInt(km.value);
    let basePrice = 0.21 * kmValue;
    let price;
    let display;
    
    if (ageValue < 18) {
        //Sconto del 20%
        price = basePrice * 0.8;
        document.getElementById("offert").innerText = "Biglietto Junior";
    } else if (ageValue >= 65) {
        //Sconto del 40%
        price = basePrice * 0.6;
        document.getElementById("offert").innerText = "Biglietto Senior";
    } else {
        price = basePrice;
        document.getElementById("offert").innerText = "Biglietto Standard";
    }
    
    document.getElementById("passenger").innerText = `${name.value}`;
    document.getElementById("result").innerText = `${price.toFixed(2)}€`;
    
})