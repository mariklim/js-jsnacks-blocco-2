// Crea due array che hanno un numero di elementi diversi.
// Aggiungi elementi casuali all’array che ha meno elementi,
// fino a quando ne avrà tanti quanti l’altro.

// 1. Creo due contenitori-array con un numero diverso di elementi dentro
// 2. Creo un ciclo While per riempire l'array con meno elemti finche non sara' uguale all'altro

var contenitore1 = ["fiore", "mare", "gatto"];
var contenitore2 = ["pizza", "coctail", "sonno", "festa", "soldi"];

// for (var i = 0; i < contenitore1.length; i++ ){
//     console.log(i);
// }

// for (var i = 0; i <= contenitore2.length; i++ ){
//     console.log(i);
// }
var coseNuove = 0;
var contatore = 0;
while (contenitore1.length  < contenitore2.length){
    coseNuove = prompt("aggiungi qualcosa per riempire il contenitore");
    contenitore1.push(coseNuove);
    contatore ++;
}

alert("Adesso è pieno, grazie")
alert("Abbaimo: " + contenitore1);