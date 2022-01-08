let nome;

const urlString = window.location.href;
let url = new URL(urlString);

function setup() {
  createCanvas(windowWidth, windowHeight);
  nome = getItem("myText");
}

function draw() {
  background("yellow");
  textAlign(CENTER);
  textSize(20);
  text(nome, width / 2, height / 2);
}

function mouseClicked() {
  window.open(url + "second-page.html?count=" + frameCount, "_self");
}
