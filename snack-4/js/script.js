// snack-4 Chiedi un numero di 4 cifre all’utente e calcola la somma di tutte 
// le cifre che compongono il numero.

const number = prompt('inserisci un numero di 4 cifre');

let sum = 0;

if (number.length === 4) {

    for (let i = 0; i < number.length; i++) {
    
        sum += parseInt(number[i]);
    }
    
    console.log('la somma delle cifre del numero è:', sum);
} else {
    console.log('riprova ed inserisci solo 4 cifre');
}