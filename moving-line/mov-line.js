/// <reference path="./../p5.global-mode.d.ts" />


let movers = [];
let N = 9;
let paused;

function setup() {
  createCanvas(1900, 1000);
  background(0);

  for (var i = 0; i < N; i++) {
    movers.push(new Mover());
  }

  paused = false;

}

function draw() {
  // background(0);

  for (var i = 0; i < N; i++) {
    // movers[i].checkEdges();
    if (!paused) {
      movers[i].update();
    }
    movers[i].draw();
  }

}

function mouseReleased() {
  paused = !paused;

}

function randomColor() {
  r = random(100, 255);
  g = random(100, 255);
  b = random(100, 255);
  return color(r, g, b, 80);
}

class Mover {
  constructor() {
    this.position = createVector(random(width), random(height));
    this.velocity = createVector(random(-2, 2), random(-2, 2));
    this.acceleration = createVector(0.005, 0.005);
    this.nOff = 1000;
    this.topSpeed = 10;
    this.radius = 1;
    this.color = randomColor();


    this.angle = 0;
    this.angleV = 0.05;
    this.angleA = 0;
  }

  update() {
    // this.acceleration = p5.Vector.random2D();
    this.acceleration = map(noise(this.nOff), 0, 1, 0, 0.01);
    // this.acceleration.mult(random(0.7));
    // this.acceleration.mult(noise(this.nOff));
    // this.velocity = p5.Vector.random2D();
    // this.velocity.mult(0.5);
    this.velocity.add(this.acceleration);
    this.position.add(this.velocity);

    this.angleA = map(noise(this.nOff), 0, 1, 0.01, 0.02);
    this.angleV += this.angleA;
    this.angleV = constrain(this.angleV, 0.01, 0.05);
    this.angle += this.angleV;

    this.checkEdges();
    this.nOff += 0.01;

    this.angleA = 0;

  }

  checkEdges() {
    let position = this.position;
    let velocity = this.velocity;
    let radius = this.radius;

    if (position.x + radius > width || position.x - radius < 0) {
      velocity.x = velocity.x * -1;
      // acceleration.x = acceleration.x * -0.5;
    }
    if (position.y + radius > height || position.y - radius < 0) {
      velocity.y = velocity.y * -1;
      // acceleration.y = acceleration.y * -0.5;
    }
  }

  draw() {
    push();
    // stroke(255, 60);
    // stroke(217, 48, 151, 80);
    strokeWeight(1);
    stroke(this.color);
    translate(this.position.x, this.position.y);
    // circle(0, 0, 2);
    rotate(this.angle);
    line(0, 0, 70, 0);
    pop();
  }
}
