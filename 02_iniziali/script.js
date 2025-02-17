/* Scrivi una funzione che accetti un array di nomi e restituisca un nuovo array con le iniziali di ogni parola dell'array fornito */

const names = ["Anna", "Luca", "Marco", "Adele", "Giovanni", "Alessandra"];

// Dichiara la funzione qui.

let firstLetter = [ ];

function onlyFirstLetter(nameList) {

    for (let i = 0; i < nameList.length; i++) {

        firstLetter.push(nameList[i][0]);
    }

    return firstLetter
}

// Invoca la funzione qui e stampa il risultato in console

onlyFirstLetter(names)
console.log(firstLetter)

//Risultato atteso: ["A", "L", "M", "A", "G", "A"]
