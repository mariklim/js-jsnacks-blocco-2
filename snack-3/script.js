// Generatore di “nomi cognomi” casuali: prendendo una lista di nomi e una
// lista di cognomi, Gatsby vuole generare una falsa lista di 3 invitati.

//1.creo due archivi-array con i nomi e cognomi
//2. creo un ciclo FOR per estrare random 3 nomi e 3 cognomi
//3. creo un array vuoto per la lista di Invitati
//4. unisco nome e cognome e lo metto nella lista
//5. stampo la lista

var nomi = ["Mario", "Gigi", "Giuseppe", "Anna", "Lisa"];
var cognomi = [" Rossi", "Verdi", "Gialli", "Azzurri", "Grassi"];

var listaInvitati = [];
for (var i = 0; i<3; i++ ){
    // console.log("cognome nella lista sono: ");
    // console.log(cognomi[i]);
    // console.log("nome nella lista sono: ");
    // console.log(nomi[i]);
    var nomeCasuale = nomi[Math.floor(Math.random()*nomi.length)];
    // console.log(nomeCasuale);
    var cognomeCasuale = cognomi[Math.floor(Math.random()*cognomi.length)];
    // console.log(cognomeCasuale);
    var nomeCompleto = nomeCasuale + " " + cognomeCasuale;
    listaInvitati.push(nomeCompleto);
    console.log(listaInvitati[i]);
    alert("Ciao, " + listaInvitati[i] + ", sei nella lista!")
}

