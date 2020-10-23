//inserisco input
var inputSurname = prompt("Ciao, visitatore! Mi dici il tuo cognome?");
var cognomi = ['Bianchi', 'Rossi', 'Duzioni', 'Balsano', 'Verdi'];
cognomi.push(inputSurname);

cognomi.sort();

var cognomiOl = document.getElementById("lista");

var posizioneUtente;
//elaborazione dati
for (var i = 0; i < cognomi.length; i++){
  cognomiOl.innerHTML += "<li>" + cognomi[i] + "</li>";
  if (inputSurname == cognomi[i]){
    posizioneUtente = i;
  }
}
//output
document.getElementById("utente").innerHTML += posizioneUtente + 1;
