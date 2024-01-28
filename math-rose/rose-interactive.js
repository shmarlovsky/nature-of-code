/// <reference path="./../p5.global-mode.d.ts" />

let n = 2;
let d = 4;
let a = 0;

let s1;
let s2;


function setup() {
  createCanvas(600, 600)
  background(20)

  s1 = createSlider(1, 10, 5, 1)
  s1.position(20, 20)
  s2 = createSlider(1, 10, 1)
  s2.position(20, 50)

}

function draw() {
  background(20)
  fill(255)
  textSize(20)
  text(s1.value(), s1.x * 2 + s1.width, 30);
  text(s2.value(), s2.x * 2 + s2.width, 60);
  let n = s1.value()
  let d = s2.value()
  // background(20, 10)
  push()
  translate(width / 2, height / 2)
  stroke(255)
  strokeWeight(2)

  // let r = 200 * cos(k * a);
  // let x = r * cos(a)
  // let y = r * sin(a)
  // point(x, y)
  // a += 0.03

  let k = n / d;
  for (let a = 0; a < TWO_PI * d; a += 0.001) {
    // let r = 200;
    let r = 200 * cos(k * a);
    let x = r * cos(a)
    let y = r * sin(a)
    point(x, y)
  }

  pop()

}
