// snack-1 Il software deve chiedere per 10 volte all’utente di inserire un numero.
// Il programma stampa la somma di tutti i numeri inseriti
let outputHtml = document.querySelector('.ms_output');

const number1 = parseInt(prompt('Inserisci un numero'));
outputHtml.innerHTML = `${number1} + </br>`;

const number2 = parseInt(prompt('Inserisci un numero'));
outputHtml.innerHTML += `${number2} + </br>`;

const number3 = parseInt(prompt('Inserisci un numero'));
outputHtml.innerHTML += `${number3} + </br>`;

const number4 = parseInt(prompt('Inserisci un numero'));
outputHtml.innerHTML += `${number4} + </br>`;

const number5 = parseInt(prompt('Inserisci un numero'));
outputHtml.innerHTML += `${number5} + </br>`;

const number6 = parseInt(prompt('Inserisci un numero'));
outputHtml.innerHTML += `${number6} + </br>`;

const number7 = parseInt(prompt('Inserisci un numero'));
outputHtml.innerHTML += `${number7} + </br>`;

const number8 = parseInt(prompt('Inserisci un numero'));
outputHtml.innerHTML += `${number8} + </br>`;

const number9 = parseInt(prompt('Inserisci un numero'));
outputHtml.innerHTML += `${number9} + </br>`;

const number10 = parseInt(prompt('Inserisci un numero'));
outputHtml.innerHTML += `${number10} = </br>`;

// porre ogni variabile delle prompt in un array
const numberList = [
    number1,
    number2, 
    number3, 
    number4, 
    number5, 
    number6, 
    number7, 
    number8, 
    number9, 
    number10
]

let sum = 0;

// sfruttare il for e calcolare ogni elemento dell'array 
for (let i = 0; i < numberList.length; i++) {

    sum += numberList[i];

}

outputHtml.innerHTML += `La somma è: ${sum}`;
