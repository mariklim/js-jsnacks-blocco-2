// Il software deve chiedere per 5 volte all’utente di inserire un numero.
// Il programma stampa la somma di tutti i numeri inseriti.
// Esegui questo programma in due versioni, con il for e con il while.

    for (var i = 1; i < 5; i++){
    var numero = parseInt(prompt("Inserisci un numero"));  
} 
console.log(numero = numero + numero + numero + numero + numero);

var i = 1;
while (i<5){
    var numero = parseInt(prompt("Inserisci un numero"));
    i++;
}
console.log(numero = numero + numero);