// Il software deve chiedere per 5 volte all’utente di inserire un numero.
// Il programma stampa la somma di tutti i numeri inseriti.
// Esegui questo programma in due versioni, con il for e con il while.

var listaNumeri = [];
    for (var i = 0; i < 5; i++){
    var numero = parseInt(prompt("Inserisci un numero"));
    listaNumeri.push(numero);   
} 
console.log(numero*5);

var i = 0;
while (i<5){
    var numero = parseInt(prompt("Inserisci un numero"));
    i++;
    listaNumeri.push(numero);  
}

console.log(numero*5);