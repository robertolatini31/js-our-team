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

//   MILESTONE 1 (da fare entro le 18):
// stampare su console le informazioni di nome, ruolo e la stringa della foto

// creo un ciclo che scorre l'array di oggetti
for (let i = 0; i < team.length; i++) {
    const element = team[i]; // a ogni iterazione l'oggetto in posizione i a una variabile element
    for (let key in element) { // ciclo nell'oggetto ogni chiave
        console.log(element[key]); // loggo il contenuto dell'oggetto per ogni chiave
    }
}

