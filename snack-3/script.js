// // Inserisci un numero, se è pari stampa il numero,
// // se è dispari stampa il numero successivo


// for (var i = 0; i <=4; i++){
//     var numero = parseInt(prompt("Inserisci un numero"));
//  if (numero % 2 == 0){
//      console.log(numero);
//  }
//     else if (numero % 2 == 1){
//         console.log(numero + 1);
//  }

// }

// Generatore di “nomi cognomi” casuali: prendendo una lista di nomi e una
// lista di cognomi, Gatsby vuole generare una falsa lista di 3 invitati.

// var item = items[Math.floor(Math.random()*items.length)];
var nomi = ["Mario", "Gigi", "Giuseppe", "Anna", "Lisa"]
var cognomi = [" Rossi", "Verdi", "Gialli", "Azzurri", "Grassi"]

for (var i = 0; i<=3; i++){
    var nomeCasuale = nomi[Math.floor(Math.random()*nomi.length)];
}

for (var i = 0; i<=3; i++){
    var cognomeCasuale = cognomi[Math.floor(Math.random()*cognomi.length)];
}
var nomeCompleto = nomeCasuale + cognomeCasuale;

var listaInvitato = [];

listaInvitato.push(nomeCompleto);

console.log(listaInvitato);
