/// <reference path="./../p5.global-mode.d.ts" />

var angle;
var angle2;
var points = [];
var N = 1;

function setup() {
  angle = 0;
  angle2 = 0;
  createCanvas(600, 600);
  background(20);
  stroke(255, 90);

  for (var i = 0; i < N ; i++) {
    points.push(new Point());
  }
}

function draw() {
  background(20,20);

  for (var i = 0; i < N; i ++) {
    points[i].update();
    points[i].draw();
  }

}

class Point {
  constructor() {
    this.x = 0;
    this.y = 0;
    this.xAngle = 0;
    this.yAngle = 0;
    this.d1 = map(random(1), 0, 1, -0.05, 0.05);
    this.d2 = map(random(1), 0, 1, -0.05, 0.05);
  }
  update() {
    this.x = map(sin(this.xAngle), -1, 1, 0, width);
    this.y = map(sin(this.yAngle), -1, 1, 0, height);
    this.xAngle += this.d1;
    this.yAngle += this.d2;
  }
  draw() {
    circle(this.x, this.y, 10);
  }
}
