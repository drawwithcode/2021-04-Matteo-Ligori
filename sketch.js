let sfondo;
let start;
var input;
//prendo link pagina
const urlString = window.location.href;
let url = new URL(urlString);

function preload() {
  //inserisco sfondo e titolo
  sfondo = loadImage("./assets/sfondo-01.png");
  titolo = loadImage("./assets/titolo.png");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  imageMode(CENTER);
  background("powderblue");
  //creo bottone html, stile modificato tramuite il file html
  start = createButton("Adopt!");
  start.mouseClicked(goTo);
  //inserisco elemento html input modificato nel file html
  input = createInput("").attribute("placeholder", "Type here");
}

function draw() {
  image(sfondo, width / 2, height / 2, width, height);
  image(titolo, width / 2, height / 2 - 180, 500, 205);

  var testo = "Chose your alien nickname";
  textFont("DM Sans");
  textAlign(CENTER);
  textSize(25);
  fill(255);
  text(testo, width / 2 - 10, height / 2 - 40);

  textFont("Titan One");
  textSize(35);

  //quando scrivo nell'input la stringa viene riscritta sotto con un punto esclamativo
  var myText = input.value();
  if (input.value() == "") {
    text("", width / 2, height / 2 + 50);
  } else {
    text(myText + "!", width / 2 - 10, (height * 2) / 3);
  }
  // utilizzo storeItem, funzione prefatta che permette di registrare nella sessione attuale un elemento, in questo caso la stringa del nome
  // in questo modo quando si andrà nell'altra pagina html, verrà trascritto anche se su due pagine html separate
  storeItem("myText", myText);
}

function goTo() {
  //richiamo la pagine che verrà aperta in seguito
  if (input.value() != "") {
    window.open(url + "second-page.html?" + input.value(), "_self");
  }
}
