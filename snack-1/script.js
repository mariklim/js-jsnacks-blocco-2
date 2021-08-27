// Il software deve chiedere per 5 volte all’utente di inserire un numero.
// Il programma stampa la somma di tutti i numeri inseriti.
// Esegui questo programma in due versioni, con il for e con il while.

// Per il ciclo FOR
// 1.creo una variabile var somma = 0 (mi serve contenitore "vuoto" per la somma che calcolo sucessivamente!!!)
// 2.creo il ciclo for per 5 per chiedere il numero all'utente.
// 3.con ciclo while verifico se l'utente sta mettendo il numero, se no, lo chiedo con promt inserire di nuovo il numero.
// 4. scrivo la formula per calcolare la somma (dentro il ciclo for!!!)
// 5. stampo la somma
alert("Adesso partira' il ciclo FOR!")
var somma = 0;
for (var i = 1; i <= 5; i++){
    var numero  = parseInt(prompt("Inserisci cortesemente il numero..."));
    while (isNaN(numero)){
        numero  = parseInt(prompt("Hai sbagliato,inserisci cortesemente il numero..."));
    }
    console.log("il numero scelto: " + numero);
    somma = somma + numero;
    // dentro ciclo for somma i numeri 5 volte, se metto fuori ciclo somma solo 1 volta (0+ solo ultimo numero inserito)
}
console.log("la somma di numeri scelti: " + somma);


// Per il ciclo WHILE
alert("Adesso partira' il ciclo While!")

var somma2 = 0;
var contatore = 1;
while(contatore <= 5){
    numero  = parseInt(prompt("inserisci cortesemente il numero..."));
    contatore++;
    console.log("il numero scelto: " + numero);
    somma2 = somma2 + numero;
    while (isNaN(numero)){
        numero  = parseInt(prompt("Hai sbagliato,inserisci cortesemente il numero..."));
    }
    // convalido il numero con un'altro While (While dentro While ma non con if!!!)
}
console.log("la somma di numeri scelti: " + somma);




