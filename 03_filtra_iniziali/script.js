/* Scrivi una funzione che accetti un'array di stringhe e una lettera e restituisca un array contenente solo le parole che iniziano con quella lettera */

const names = ["Anna", "Luca", "Marco", "Adele", "Laura", "Alessandra"];

// Dichiara la funzione qui.

const userInput = prompt('Inserisci una lettera singola per cercare un nome [es. A,B,C ...').toUpperCase();

const result = [];

function onlyFirstLetter(nameList) {

    for (let i = 0; i < nameList.length; i++) {

        const firstLetter = nameList[i][0];

        if (userInput === firstLetter) {
            result.push(nameList[i])
        }
    }

    return result
}

// Invoca la funzione qui e stampa il risultato in console

onlyFirstLetter(names);

if (result.length === 0) {
    console.log('Non ci sono nomi con questa lettera')
} else { 
    console.log(result) 
}


//Risultato atteso se si passa la lettera A: ["Anna", "Adele", "Alessandra"]