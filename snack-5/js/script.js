// snack-5 Crea un array vuoto e chiedi all’utente un numero da inserire nell’array.
// Continua a chiedere i numeri all’utente e a inserirli nell’array fino a quando la
// somma degli elementi è minore di 50.
let outputHtml = document.querySelector('.ms_output');

const array = [];
let sum = 0;

do {
    const number = prompt('inserisci un numero');
    array.push(number);
    outputHtml.innerHTML += `cifra inserita per la somma: ${number} </br>`;

    sum += parseInt(array); 

    console.log('La somma non è ancora 50');

} while (sum < 50)

outputHtml.innerHTML += 'la somma ha superato 50';
