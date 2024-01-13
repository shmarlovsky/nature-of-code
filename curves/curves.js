/// <reference path="./../p5.global-mode.d.ts" />

var N = 1000;
var angle = 0;
mult = 10;
xoff = 1;
yoff = 200;

noff = 100;
noff2 = 200;
noff3 = 300;
cOff = 1000;
var debug = false;

function setup() {

  // xoff = width / 8;
  angleDelta = PI / N;
  createCanvas(600, 600);
  background(4, 4, 30);

  stroke(255);
  noFill();
  // curve(200, 200, 200, 200, 400, 400, 400, 400);

  stroke(255);
  noFill();
  l = width *0.4;

  translate(width / 2, height / 2);

  if (debug) {
    scale(0.5);
  }

  for (var i = 0; i < N; i++) {
    yoff1 = map(noise(noff), 0, 1, -8 * l, 8 * l);
    yoff2 = map(noise(noff2), 0, 1, -8 * l, 8 * l);
    // yoff2 = yoff1;
    xoff = map(noise(noff3), 0, 1, 4 * l, 8 * l);
    // xoff = 2*l;
    push()
    rotate(angle);
    // line(-l, 0, l, 0);
    if (debug) {
      stroke(255);
    } else {
      c = noiseColor()
      print(c);
      stroke(c);
    }
    curve(-xoff, yoff1, -l, 0, l, 0, xoff, yoff2);

    // ancors
    if (debug) {
      push();
      stroke(255, 50);
      circle(-xoff, yoff1, 10);
      line(-xoff, yoff1, -l, 0);
      circle(-l, 0, 8);

      circle(xoff, yoff2, 10);
      line(xoff, yoff2, l, 0);
      circle(l, 0, 8);

      pop();
    }
    //

    pop()
    angle += angleDelta;
    noff += 0.01;
    noff2 += 0.01;
    noff3 += 0.01;
  }

  createP(angleDelta);
}

function draw() {
  // background(0);

  // curve(0, 0, 0, 300, 300, 500, mouseX * 10, mouseY * 10);

}


function randomColor() {
  r = random(100, 255);
  g = random(100, 255);
  b = random(100, 255);
  return color(r, g, b, 80);
}

function noiseColor() {
  r = map(noise(cOff), 0, 1, 100, 250);
  g = map(noise(cOff+100), 0, 1, 100, 250);
  b = map(noise(cOff+200), 0, 1, 100, 250);
  cOff += 0.01;
  return color(r, g, b, 70);

}
