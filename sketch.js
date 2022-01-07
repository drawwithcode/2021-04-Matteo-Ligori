/*let s1 = function (p) {
  p.setup = function () {
    p.createCanvas(400, 400);
    p.background("red");
  };
};

let s2 = function (p) {
  p.setup = function () {
    p.createCanvas(400, 400);
    p.background("green");
  };
};

let p1 = new p5(s1);
let p2 = new p5(s2);

p1.draw = function () {
  p1.ellipse(p1.mouseX, p1.mouseY, 20);
  p1.fill("green");
};

p2.draw = function () {
  p2.rect(p2.mouseX, p2.mouseY, 20);
};
*/
const urlString = window.location.href;
let url = new URL(urlString);

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background("powderblue");
  textAlign(CENTER);
  textSize(20);
  text(frameCount, width / 2, height / 2);
}

function mouseClicked() {
  window.open(url + "second-page.html?count=" + frameCount, "_self");
}
