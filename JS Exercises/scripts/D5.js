/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per visualizzare l'output, lancia il file HTML a cui è collegato e apri la console dagli strumenti di sviluppo del browser. 
- Utilizza dei console.log() per testare le tue variabili e/o i risultati delle espressioni che stai creando.
*/

/* ESERCIZIO 1
    Dato il seguente array, scrivi del codice per stampare ogni elemento dell'array in console.
*/
const pets = ['dog', 'cat', 'hamster', 'redfish']

console.log(pets) // cosi stampo array

//con questo ciclo for stamo ogni contenuto del array
for(let i = 0; i < pets.length; i++){
  console.log(pets[i])
}

/* ESERCIZIO 2
    Scrivi del codice per ordinare alfabeticamente gli elementi dell'array "pets".
*/
//Utilizziamo il metodo sort per ordiinare in ordine alfabetico array
console.log(pets.sort())


/* ESERCIZIO 3
    Scrivi del codice per stampare nuovamente in console gli elementi dell'array "pets", questa volta in ordine invertito.
*/
//Utilizziamo il metodo reverse per ordiinare in ordine alfabetico array
console.log(pets.reverse())

/* ESERCIZIO 4
    Scrivi del codice per spostare il primo elemento dall'array "pets" in ultima posizione.
*/
// NB SONO IMPAZZITO, MA IN REALTA' HO FATTO BENE AVENDO INVERTITO ARRAY ORA IN PRIMA POSZIONE C'E' REDFISH NON DOG, QUINDI REDFISH DA PRIMO E TORNATO ULTIMO
const spostare = pets.splice(0, 1)

pets.splice(3, 0, spostare[0])

console.log(pets)

/* ESERCIZIO 5
    Dato il seguente array di oggetti, scrivi del codice per aggiungere ad ognuno di essi una proprietà "licensePlate" con valore a tua scelta.
*/
const cars = [
  {
    brand: 'Ford',
    model: 'Fiesta',
    color: 'red',
    trims: ['titanium', 'st', 'active'],
  },
  {
    brand: 'Peugeot',
    model: '208',
    color: 'blue',
    trims: ['allure', 'GT'],
  },
  {
    brand: 'Volkswagen',
    model: 'Polo',
    color: 'black',
    trims: ['life', 'style', 'r-line'],
  },
]
//AGGIUNGIAMO LA PROPIETA LICENSEPLATE MA SFRUTTIAMO IL METODO MATHRANDOM PER GENERARE UNA TARGA CASUALE
const plateChar = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789"

for (let i = 0; i < cars.length; i++) {
  let plate = ""
  for (let j = 0; j < 7; j++) {
    const randomIndex = Math.floor(Math.random() * plateChar.length)
    plate += plateChar[randomIndex]
  }
  cars[i].licensePlate = plate
}

console.log(cars)

/* ESERCIZIO 6
    Scrivi del codice per aggiungere un nuovo oggetto in ultima posizione nell'array "cars", rispettando la struttura degli altri elementi.
    Successivamente, rimuovi l'ultimo elemento della proprietà "trims" da ogni auto.
*/
// CREIAMO UN NUOVO OGGETTO E LO PUSHIAMO NEL ARRAY DI OGGETTI
const nuovoOggetto = 
  {
    brand: 'Ferrari',
    model: 'Spider',
    color: 'red',
    trims: ['titanium', 'st', 'active'],
  }

cars.push(nuovoOggetto)

console.log(cars)

// CREIAMO UN CICLO CHE ELIMINA CON POP L'ULTIMO ELEMENTO DEL ARRAY TRIMS NEL OGGETTO CARS
for(let i = 0; i < cars.length; i++){
  cars[i].trims.pop()
}

console.log(cars)

/* ESERCIZIO 7
    Scrivi del codice per salvare il primo elemento della proprietà "trims" di ogni auto nel nuovo array "justTrims", sotto definito.
*/
const justTrims = []

//CREIAMO UN CICLO CHE ENTRA NEL ARRAY DI OGETTI CARS, E PRENDE IL PRIMO INDICE DI TRIMS(0) E LO PUSHIAMO NEL NUOVO ARRAY
for(i = 0; i < cars.length; i++){
  let trims = cars[i].trims[0]
  justTrims.push(trims)
}

console.log(justTrims)

/* ESERCIZIO 8
    Cicla l'array "cars" e costruisci un if/else statament per mostrare due diversi messaggi in console. Se la prima lettera della proprietà
    "color" ha valore "b", mostra in console "Fizz". Altrimenti, mostra in console "Buzz".
*/

//CREIAMO UN CICLO CHE ENTRA NEL ARRAY DI OGETTI CARS, E PRENDE IL PRIMO INDICE DI COLOR(0) E LO CONFRONTIAMO CON LA CONDIZIONE IF
for(i = 0; i < cars.length; i++){
  let verifica = cars[i].color[0]

  if(verifica === "b"){
    console.log("Fizz")
  } else {
    console.log("Buzz")
  }
}

/* ESERCIZIO 9
    Utilizza un ciclo while per stampare in console i valori del seguente array numerico fino al raggiungimento del numero 32.
*/
const numericArray = [
  6, 90, 45, 75, 84, 98, 35, 74, 31, 2, 8, 23, 100, 32, 66, 313, 321, 105,
]
//HO USATO Y PERCHE CON I MI DAVA ERRORE (NON SO PERCHE PENSO PER I FOR) IL HILE INIZIA PERCHE LA CONDIZIONE E' FALSA DIVENTA VERA QUANDO DIVENTA UGUALE A 32 E INCEREMENTIAMO IL CONTEGGIO CON Y++
let y = 0

while(numericArray[y] !== 32){
  y++
}
console.log(numericArray[y])



/* ESERCIZIO 10
    Partendo dall'array fornito e utilizzando un costrutto switch, genera un nuovo array composto dalle posizioni di ogni carattere all'interno
    dell'alfabeto italiano.
    es. [f, b, e] --> [6, 2, 5]
*/
const charactersArray = ['g', 'n', 'u', 'z', 'd']

const alfabeto = []
//CREIAMO UN CICLO FOR CHE ENTRA NEL NOSTRO ARRAY E CON SWITCH CONTROLLIAMO LE LETTERE SE LA LETTERA E' GIUSTA SE GIUSTA LA PUSHIIAMO NEL ARREY ALFABETO
for (let i = 0; i < charactersArray.length; i++) {
  let lettere = charactersArray[i]

  switch (lettere) {
    case 'a':
      alfabeto.push(0)
      break
    case 'b':
      alfabeto.push(1)
      break
    case 'c':
      alfabeto.push(2)
      break
    case 'd':
      alfabeto.push(3)
      break
    case 'e':
      alfabeto.push(4)
      break
    case 'f':
      alfabeto.push(5)
      break
    case 'g':
      alfabeto.push(6)
      break
    case 'h':
      alfabeto.push(7)
      break
    case 'i':
      alfabeto.push(8)
      break
    case 'l':
      alfabeto.push(9)
      break
    case 'm':
      alfabeto.push(10)
      break
    case 'n':
      alfabeto.push(11)
      break
    case 'o':
      alfabeto.push(12)
      break
    case 'p':
      alfabeto.push(13)
      break
    case 'q':
      alfabeto.push(14)
      break
    case 'r':
      alfabeto.push(15)
      break
    case 's':
      alfabeto.push(16)
      break
    case 't':
      alfabeto.push(17)
      break
    case 'u':
      alfabeto.push(18)
      break
    case 'v':
      alfabeto.push(19)
      break
    case 'z':
      alfabeto.push(20)
      break
  }
}

console.log(alfabeto)
