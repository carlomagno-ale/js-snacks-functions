/* Scrivi una funzione che accetti una stringa e restituisca il numero di vocali contenute al suo interno */

const word = 'javascript';


// Dichiara la funzione qui.

let result = 0
const wordletters = [];

function countVocals(letter) {

    for (i = 0; i < letter.length; i++) {

       const singleLetter = letter[i]

       if ( singleLetter === 'a' || singleLetter === 'e' || singleLetter === 'i' || singleLetter === 'o' || singleLetter === 'u'){

       result++
       wordletters.push(letter[i])

       }
    }

    return result
}

// Invoca la funzione qui e stampa il risultato in console

countVocals(word);
console.log(result, wordletters);



//Risultato atteso se si passa 'javascript': 3 (a, a, i)