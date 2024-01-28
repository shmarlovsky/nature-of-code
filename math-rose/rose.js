/// <reference path="./../p5.global-mode.d.ts" />


// TODO: add noise color

let n = 8;
let d = 5;
let angle = 0;
let _angle = 0
let rAngle = 0

let mainColor;

let fps

function setup() {
  frameRate(30)
  createCanvas(600, 600)
  background(20)

  fps = createP()

  mainColor = color(100, 200, 150, 50);

}

function draw() {
  background(20)

  fps.html(floor(frameRate()))

  translate(width / 2, height / 2)
  rotate(rAngle)
  strokeWeight(2)

  rose2(n, d, 250, mainColor)

  rAngle += 0.002

}

// default render
function rose(n, d, color) {
  push()
  stroke(color)
  fill(color)
  beginShape()
  let k = n / d;
  for (let a = 0; a < TWO_PI * d; a += 0.001) {
    let r = 200 * cos(k * a);
    let x = r * cos(a)
    let y = r * sin(a)
    vertex(x, y)
  }
  endShape()

  pop()
}

// render with rotatingLine
function rose2(n, d, l,  color) {
  let k = n / d;
  for (let a = 0; a < TWO_PI * d; a += 0.01) {
    let r = l * cos(k * a);
    let x = r * cos(a)
    let y = r * sin(a)
    rotatingLine(x, y, 15, color)
  }

}


function rotatingLine(cx, cy, r, color) {
  // stroke(color)
  stroke(100, 200, 150, 50)

  x1 = cx - r * cos(_angle)
  y1 = cy - r * sin(_angle)
  x2 = cx + r * cos(_angle)
  y2 = cy + r * sin(_angle)

  line(x1, y1, x2, y2)

  _angle += 0.01

}
