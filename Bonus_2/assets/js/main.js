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



// BONUS 2:
// organizzare i singoli membri in card/schede
// OK 

//come prima collego il punto della dom dove stampare
const cardPositionElement = document.querySelector('main .row');
// copio il ciclo precedente e modifico per inserire le card
for (let i = 0; i < team.length; i++) {
    const element = team[i]; // a ogni iterazione l'oggetto in posizione i a una variabile element
    let elementsToPrint = []; // inizializoz una stringa vuota
    for (let key in element) { // ciclo nell'oggetto ogni chiave
       elementsToPrint.push(element[key]);//aggiungo alla stringa tutti i valori delle parole chiave dell'oggetto
    }
    // stampo i primi due valori come prima mentre per le img inserisco il valore all'interno di un tag img con il percorso file già inserito
    cardPositionElement.innerHTML += `
    <div class="col d-flex justify-content-center">
                    <div class="card" style="width: 18rem;">
                        <img src="./assets/img/${elementsToPrint[2]}" class="card-img-top">
                        <div class="card-body text-center">
                            <h5>${elementsToPrint[0]}</h5>
                            <p class="card-text">${elementsToPrint[1]}</p>
                        </div>
                    </div>
                    <!-- /.card  -->
                </div>
                <!-- /.col -->
    `
  }

