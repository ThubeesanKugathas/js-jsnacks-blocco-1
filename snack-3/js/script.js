// snack-3 Stampa le potenze di 2 fino a 1000.

let due = 0;

for (let i = 0; i < 1000; i++) {

    if (due < 1000) {
        due = Math.pow(2, i);
    } else {
        break;
    }

    console.log(due);
}
