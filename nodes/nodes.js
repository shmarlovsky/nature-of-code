/// <reference path="./../p5.global-mode.d.ts" />

var points = [];
var seed;
var N = 20;

class Point {
  constructor(pos, clr) {
    this.pos = pos
    this.color = clr;
  }
  show() {
    push();
    stroke(this.color);
    strokeWeight(5)
    point(this.pos.x, this.pos.y)
    pop();
  }
}
function setup() {
  // seed = millis();
  // print(millis());
  // randomSeed(seed);
  // createP(seed)

  createCanvas(windowWidth, windowHeight);
  background(10);
  for (var i = 0; i < N; i++) {
    var r = random(50, 255);
    var g = random(50, 255);
    var b = random(50, 255);
    var clr = color(r, g, b);
    // var p = new Point(createVector(random(width / 5, width / 5 * 4), random(height / 5, height / 5 * 4)), clr);
    var p = new Point(createVector(random(width), random(height)), clr);
    points.push(p);
  }



  for (var i = 0; i < N; i++) {

    for (var j = 0; j < N; j++) {
      if (i == j) {
        continue;
      }
      push();
      // stroke(255, 50);
      gradientLine(points[i].pos.x, points[i].pos.y, points[j].pos.x, points[j].pos.y, points[i].color, points[j].color);
      // line(points[i].pos.x, points[i].pos.y, points[j].pos.x, points[j].pos.y)
      pop();
    }
    points[i].show();
  }

}

function draw() {

}

function gradientLine(x1, y1, x2, y2, color1, color2) {
  // linear gradient from start to end of line
  var grad = this.drawingContext.createLinearGradient(x1, y1, x2, y2);
  grad.addColorStop(0, color1);
  grad.addColorStop(1, color2);

  stroke(1);
  this.drawingContext.strokeStyle = grad;

  line(x1, y1, x2, y2);
}
