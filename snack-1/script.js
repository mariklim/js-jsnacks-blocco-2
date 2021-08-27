// Il software deve chiedere per 5 volte all’utente di inserire un numero.
// Il programma stampa la somma di tutti i numeri inseriti.
// Esegui questo programma in due versioni, con il for e con il while.

// 1.creo una variabile var somma = 0 (mi serve contenitore "vuoto" per la somma che calcolo sucessivamente!!!)
// 2.creo il ciclo for per 5 per chiedere il numero all'utente.
// 3.con ciclo while verifico se l'utente sta mettendo il numero, se no, lo chiedo con promt inserire di nuovo il numero.
// 4. scrivo la formula per calcolare la somma (dentro il ciclo)
// 5. stampo la somma

var somma = 0;
for (var i = 0; i < 5; i++){
    var numero  = parseInt(prompt("Inserisci cortesemente il numero..."));
    while (isNaN(numero)){
        numero  = parseInt(prompt("Hai sbagliato,inserisci cortesemente il numero..."));
    }
    console.log("il numero scelto: " + numero);
    somma = somma + numero;
}
console.log("la somma di numeri scelti: " + somma);

