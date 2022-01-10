let nome;
let sfondo;
//creo variabile alien, costituita da un array
let alien = [];
let mic;
let level = 0;

const urlString = window.location.href;
let url = new URL(urlString);

function preload() {
  sfondo = loadImage("./assets/sfondo-01.png");
  // ad ogni valore corrisponde un'immagine
  alien[0] = loadImage("./assets/magro-01.png");
  alien[1] = loadImage("./assets/medio.png");
  alien[2] = loadImage("./assets/grasso.png");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  //inserisco l'input del microfono e lo faccio partire
  mic = new p5.AudioIn();
  mic.start();

  imageMode(CENTER);
  textAlign(CENTER);
  rectMode(CENTER);
  // richiamo l' item che ho immagazzinato precedentemente
  nome = getItem("myText");
}

function draw() {
  background("yellow");
  image(sfondo, width / 2, height / 2, width, height);

  noStroke();
  textFont("Titan One");
  textSize(40);
  fill(255);
  text(nome, width / 2, 100);

  textFont("DM Sans");

  //l'input sound viene poi mappato nel vol
  let sound = mic.getLevel();

  let vol = map(sound, 0, 1, 0, 100);
  console.log(vol);

  //l'immagine che viene mostrata è alien seguita dalla variabile level [0, 1, 2]
  image(alien[level], width / 2, height / 2 - 20, 410, 410);
  console.log(level);

  drawingContext.shadowOffsetX = 5;
  drawingContext.shadowOffsetY = -5;
  drawingContext.shadowBlur = 10;
  drawingContext.shadowColor = "black";

  strokeWeight(10);
  stroke(116, 255, 142);
  noFill();
  rect(width / 2, height / 2 - 20, 410, 410);

  //la funzione di incremento del livello viene rieseguita per tutta la lunghezza dell'arrey
  for (let i = 0; i < alien.length; i++) {
    incremento();
  }
}

//ogni volta che il volume supera una determinata soglia, il livello cambia e di conseguenza l'immagine visualizzata
function incremento() {
  let sound = mic.getLevel();
  let vol = map(sound, 0, 1, 0, 100);

  if (vol > 95) {
    level = 2;
  }
  if (vol > 80 && vol < 95 && level < 2) {
    level = 1;
  }
}
