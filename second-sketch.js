const urlString = window.location.href;

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background("yellow");
  textAlign(CENTER);
  textSize(20);
  text(frameCount, width / 2, height / 2);
}

function mouseClicked() {
  window.open(url + "second-page.html?count=" + frameCount, "_self");
}
