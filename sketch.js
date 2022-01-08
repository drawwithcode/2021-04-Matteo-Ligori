let sfondo;
let start;
var input;

const urlString = window.location.href;
let url = new URL(urlString);

function preload() {
  sfondo = loadImage("./assets/sfondo-01.png");
  titolo = loadImage("./assets/titolo.png");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  imageMode(CENTER);
  background("powderblue");
  start = createButton("Adopt!");
  start.mouseClicked(goTo);

  input = createInput("").attribute("placeholder", "    Type here");
}

function draw() {
  image(sfondo, width / 2, height / 2, width, height);
  image(titolo, width / 2, height / 2 - 180, 500, 205);

  var testo = "Chose your alien nickname";
  textFont("Lobster");
  textAlign(CENTER);
  textSize(25);
  fill(255);
  text(testo, width / 2 - 10, height / 2 - 40);

  var myText = input.value();
  if (input.value() == "") {
    text("", width / 2, height / 2 + 50);
  } else {
    text(myText + "!", width / 2 - 10, height / 2 + 120);
  }

  storeItem("myText", myText);
}

function goTo() {
  if (input.value() != "") {
    window.open(url + "second-page.html?" + input.value(), "_self");
  }
}
