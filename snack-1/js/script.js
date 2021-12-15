// snack-1 Il software deve chiedere per 10 volte all’utente di inserire un numero.
// Il programma stampa la somma di tutti i numeri inseriti
const number1 = parseInt(prompt('Inserisci un numero'));
const number2 = parseInt(prompt('Inserisci un numero'));
const number3= parseInt(prompt('Inserisci un numero'));
const number4 = parseInt(prompt('Inserisci un numero'));
const number5 = parseInt(prompt('Inserisci un numero'));
const number6 = parseInt(prompt('Inserisci un numero'));
const number7 = parseInt(prompt('Inserisci un numero'));
const number8 = parseInt(prompt('Inserisci un numero'));
const number9 = parseInt(prompt('Inserisci un numero'));
const number10 = parseInt(prompt('Inserisci un numero'));


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

for (let i = 0; i < numberList.length; i++) {

    sum += numberList[i];

}

console.log('La somma dei numeri è:', sum);
