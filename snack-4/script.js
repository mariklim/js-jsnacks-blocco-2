// Crea un array di numeri interi
// e fai la somma di tutti gli elementi che sono in posizione (indice dell'array) dispari

// 1. creo la lista-array con i numeri interi
// 2. creo variabile "vuota" per la somma 
// 2. creo ciclo FOR per scorrere tutti i numeri
// 3. seleziono tutti gli indici i dispari e li sommo
// 4. stampo il risultato

var sommaDispari = 0;
var numeriInteri = [1,2,3,4,5,6,7];

for (var i = 0; i< numeriInteri.length; i++ ){
    // console.log(numeriInteri[i]);
    if (i % 2 == 1){
        console.log(numeriInteri[i])
        alert("Abbiamo trovato i numeri con la posizione dispari e sono: " + numeriInteri[i]);
        sommaDispari = sommaDispari + numeriInteri[i];
    }
}
alert("la somma di questi numeri: " + sommaDispari);