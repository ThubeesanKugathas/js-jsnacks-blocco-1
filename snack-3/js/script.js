// snack-3 Stampa le potenze di 2 fino a 1000.
let outputHtml = document.querySelector('.ms_output');

let due = 0;

for (let i = 0; i < 1000; i++) {

    due = Math.pow(2, i);

    if (due >= 1000) {
        break;
    }

    outputHtml.innerHTML += `potenza con esponente ${i}: ${due} </br>`;

}
