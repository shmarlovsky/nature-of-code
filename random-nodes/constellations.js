/// <reference path="./../p5.global-mode.d.ts" />

var points = [];
var seed;
var density = 3;
var withColors = true;
// var N = 30;


function setup() {
  // seed = millis();
  // print(millis());
  // randomSeed(seed);
  // createP(seed)
  N = (width + height) / density;

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
      // random connections
      dist = points[i].pos.copy().sub(points[j].pos).mag()
      if (dist < (width + height) / 15 && random(1) > 0.3) {
        // if (dist < (width+height)/15) {
        push();
        stroke(255, 50);
        if (withColors) {
          gradientLine(points[i].pos.x, points[i].pos.y, points[j].pos.x, points[j].pos.y, points[i].color, points[j].color);
        } else {
          line(points[i].pos.x, points[i].pos.y, points[j].pos.x, points[j].pos.y)
        }
        pop();
      }
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


class Point {
  constructor(pos, clr) {
    this.pos = pos
    this.color = clr;
  }
  show() {
    push();
    if (withColors) {
      stroke(this.color);
    } else {
      stroke(255);
    }
    strokeWeight(5)
    point(this.pos.x, this.pos.y)
    pop();
  }
}
