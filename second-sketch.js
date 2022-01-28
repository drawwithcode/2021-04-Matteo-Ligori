let nome;
let sfondo;
let magro;
let medio;
let grasso;

let mic;

const urlString = window.location.href;
let url = new URL(urlString);
function preload() {
  sfondo = loadImage("./assets/sfondo-01.png");
  magro = loadImage("./assets/magro.png");
  medio = loadImage("./assets/medio.png");
  grasso = loadImage("./assets/grasso.png");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  mic = new p5.AudioIn();
  mic.start();

  nome = getItem("myText");
}

function draw() {
  background("yellow");
  imageMode(CENTER);
  image(sfondo, width / 2, height / 2, width, height);

  textFont("Titan One");
  textAlign(CENTER);
  textSize(40);
  fill(255);
  text(nome, width / 2, 100);

  let sound = mic.getLevel();

  let vol = map(sound, 0, 1, 0, 100);
  console.log(vol);
  var inizio = true;
  var meta = false;
  var fine = false;

  if (vol < 40 && meta == false) {
    image(magro, width / 2, height / 2, 512, 512);
  } else if ((vol >= 40 && vol < 80) || meta == true) {
    inizio = false;
    meta = true;
    image(medio, width / 2, height / 2, 512, 512);
  } else if (vol > 80 || fine == true) {
    meta = false;
    fine = true;
    image(grasso, width / 2, height / 2, 512, 512);
  }
}

function mouseClicked() {
  window.open(url + "second-page.html?count=" + frameCount, "_self");
}

/*
if (vol < 40) {
  image(magro, width / 2, height / 2, 512, 512);
} else if (vol >= 40 && vol < 80) {
  image(medio, width / 2, height / 2, 512, 512);
} else if (vol >= 80) {
  image(grasso, width / 2, height / 2, 512, 512);
}
*/
