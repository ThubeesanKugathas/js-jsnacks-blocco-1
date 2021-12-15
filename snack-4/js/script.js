// snack-4 Chiedi un numero di 4 cifre all’utente e calcola la somma di tutte 
// le cifre che compongono il numero.
let outputHtml = document.querySelector('.ms_output');

const number = prompt('inserisci un numero di 4 cifre');
outputHtml.innerHTML = `numero inserito: ${number} </br>`;

let sum = 0;

if (number.length === 4) {

    for (let i = 0; i < number.length; i++) {
    
        sum += parseInt(number[i]);
    }
    
    outputHtml.innerHTML += `la somma delle cifre del numero è: ${sum}`;

} else {
    outputHtml.innerHTML = 'NUMERO SUPERA O NON CONTIENE 4 CIFRE: RIPROVA!';
}