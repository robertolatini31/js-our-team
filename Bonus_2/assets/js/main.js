// file fornito
const team = [
    {
      name: 'Wayne Barnett',
      role: 'Founder & CEO',
      image: 'wayne-barnett-founder-ceo.jpg',
    },
    {
      name: 'Angela Caroll',
      role: 'Chief Editor',
      image: 'angela-caroll-chief-editor.jpg',
    },
    {
      name: 'Walter Gordon',
      role: 'Office Manager',
      image: 'walter-gordon-office-manager.jpg',
    },
    {
      name: 'Angela Lopez',
      role: 'Social Media Manager',
      image: 'angela-lopez-social-media-manager.jpg',
    },
    {
      name: 'Scott Estrada',
      role: 'Developer',
      image: 'scott-estrada-developer.jpg',
    },
    {
      name: 'Barbara Ramos',
      role: 'Graphic Designer',
      image: 'barbara-ramos-graphic-designer.jpg',
    },
  ];

//   MILESTONE 1:
// stampare su console le informazioni di nome, ruolo e la stringa della foto

// creo un ciclo che scorre l'array di oggetti
for (let i = 0; i < team.length; i++) {
    const element = team[i]; // a ogni iterazione l'oggetto in posizione i a una variabile element
    for (let key in element) { // ciclo nell'oggetto ogni chiave
        console.log(element[key]); // loggo il contenuto dell'oggetto per ogni chiave
    }
}

// MILESTONE 2:
// stampare le stesse informazioni su DOM sottoforma di stringhe

// collego il punto della dom dove voglio inserire le stringhe
const stringsPositionElement = document.querySelector('.container_strings');
// copio il ciclo dei log e aggiongo la stampa a schermo
for (let i = 0; i < team.length; i++) {
    const element = team[i]; // a ogni iterazione l'oggetto in posizione i a una variabile element
    let stringToPrint = []; // inizializoz una stringa vuota
    for (let key in element) { // ciclo nell'oggetto ogni chiave
       stringToPrint.push(element[key]);//aggiungo alla stringa tutti i valori delle parole chiave dell'oggetto
    }
    stringsPositionElement.innerHTML += `<p>${stringToPrint}</p>`; // mando a schermo il contenuto dell'oggetto in forma di tag <p> così è leggibile
}


// BONUS 1:
// trasformare la stringa foto in una immagine effettiva

//come prima collego il punto della dom dove stampare
const stringsImgPositionElement = document.querySelector('.container_img_strings');
// copio il ciclo precedente e modifico per inserire le img
for (let i = 0; i < team.length; i++) {
    const element = team[i]; // a ogni iterazione l'oggetto in posizione i a una variabile element
    let stringToPrint = []; // inizializoz una stringa vuota
    for (let key in element) { // ciclo nell'oggetto ogni chiave
       stringToPrint.push(element[key]);//aggiungo alla stringa tutti i valori delle parole chiave dell'oggetto
    }
    // stampo i primi due valori come prima mentre per le img inserisco il valore all'interno di un tag img con il percorso file già inserito
    stringsImgPositionElement.innerHTML += `<p>${stringToPrint[0]}, ${stringToPrint[1]}, <img src="./assets/img/${stringToPrint[2]}"></p>`; // mando a schermo il contenuto dell'oggetto in forma di tag <p> così è leggibile
}


// BONUS 2:
// organizzare i singoli membri in card/schede
// OK 😂