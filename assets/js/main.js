//Creare un oggetto che descriva uno studente, con le seguenti proprietà:
//nome,cognome,età.
var studente = {
    nome: 'Gheorghe',
    cognome: 'Mititelu',
    età: 29,
};
//Stampare a schermo attraverso un ciclo for-in tutte le proprietà dell'oggetto.
for (var key in studente){
    console.log(key, studente[key]);
    document.getElementById('studente_capo').insertAdjacentHTML('beforeend', 
    `
    <li> ${key}: ${studente[key]} </li>
    `)
}
//Creare un array di oggetti di studenti.
var studenti = [
    {
        nome: 'Tatiana',
        cognome: 'Mindru',
        età: 29,
    },
    {
        nome: 'Victor',
        cognome: 'Nicoara',
        età: 20,
    },
    {
        nome: 'Fatima',
        cognome: 'Chnafa',
        età: 25,
    }
]


//Dare la possibilità all’utente, attraverso 3 prompt(), di aggiungere un nuovo oggetto studente inserendo nell’ordine: nome, cognome e età.
var nomeNuovo = prompt('Inserisci il nome del nuovo studente'),
    cognomeNuovo = prompt('Inserisci il cognome del nuovo studente'),
    etàNuova = Number(prompt('Inserisci l\'età del nuovo studente'));

var nuovoStudente = {
    nome: nomeNuovo,
    cognome: cognomeNuovo,
    età: etàNuova
};
studenti.push(nuovoStudente);
console.log(studenti);

//Ciclare su tutti gli studenti e stampare per ognuno di essi, nome e cognome.
for (var i = 0; i < studenti.length; i++){
    var studenteSingolo = studenti[i];
    //console.log(studenteSingolo.nome, studenteSingolo.cognome);
    for (var key in studenteSingolo) {
        if (key != 'età'){
            console.log(key, studenteSingolo[key]);
            document.getElementById('studenti_classe').insertAdjacentHTML('beforeend', 
            `
            <li> ${key}: ${studenteSingolo[key]} </li>
            `)
        }
    }
}