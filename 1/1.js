/// <reference path="./../p5.global-mode.d.ts" />

let N = 300;
let dist = 2
let radius = 50
let relOffsetCoeff = 3;
let angle = 0;

function setup() {
  createCanvas(600, 600)
  background(10)
  noFill()
  rectMode(CENTER)
  angleMode(DEGREES)
}

function draw() {
  background(10, 200);
  stroke(255)
  let w = 500;
  w = map(sin(frameCount), -1, 1, 500, 600)
  let h = w;

  translate(width / 2, height / 2)

  let j = 0;

  scale(0.9)
  for (let i = 0; i < N; i++) {
    push()
    r = map(sin(frameCount / 2 + i + 100), -1, 1, 50, 150)
    g = map(sin(frameCount / 2 + i + 50), -1, 1, 100, 200)
    b = map(sin(frameCount / 2 + i + 200), -1, 1, 100, 200)
    stroke(r, g, b)
    rotate(frameCount / 4 + i * relOffsetCoeff)
    rect(0, 0, w - j, h - j, radius);
    pop()
    if ((w - j) >= 0) {
      j += dist;
    }
  }

  par.html(frameCount)

}
