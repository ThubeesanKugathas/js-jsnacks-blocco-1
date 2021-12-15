// snack-2 Stampa il cubo di ciascuno dei primi N numeri, dove N è un numero indicato dall’utente.
// (se inserisce 10,  si stampa il cubo di 1, di 2, di 3,…)
let outputHtml = document.querySelector('.ms_output');

const number = parseInt(prompt('Inserisci un numero'));

let cube = 0;

for (let i = 0; i <= number; i++) {

    cube = Math.pow(i, 3);
    outputHtml.innerHTML += `cubo del numero ${i}: ${cube} </br>`;

}