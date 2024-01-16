/// <reference path="./../p5.global-mode.d.ts" />

let rows;
let cols;
let density = 10;
let len = density / 2;
let angle = 0;
let theta = 0;
let deltaTheta;
let N = 300;

let flowField = [];
let particles = [];

function setup() {
  createCanvas(800, 800);
  background(20);

  rows = floor(height / density);
  cols = floor(width / density);
  // angle = PI/4;
  // theta = PI/4;

  stroke(255);

  for (var x = 0; x < cols + 1; x++) {
    for (var y = 0; y < rows + 1; y++) {
      var i = x + y * cols;
      // flowField[i] = createVector(x * density, y * density);
      flowField[i] = p5.Vector.fromAngle(angle);
      // print(i, flowField[i]);

    }
    angle = map(sin(TWO_PI * theta), -1, 1, -PI / 4, PI / 4);
    deltaTheta = 0.1;
    theta += deltaTheta;
    // print(angle);
  }

  for (var i = 0; i < N; i++) {
    particles[i] = new Particle();
    particles[i].show();
  }

}

function draw() {
  // background(20);

  // for (var x = 0; x < cols + 1; x++) {
  //   for (var y = 0; y < rows + 1; y++) {
  //     var i = x + y * cols;
  //     var fl = flowField[i];
  //     push();
  //     stroke(255);
  //     translate(x * density, y * density);
  //     rotate(fl.heading());
  //     line(0, 0, len, 0);
  //     pop()

  //   }
  // }


  for (var i = 0; i < particles.length; i++) {
    vector = closestVector(particles[i])
    particles[i].applyForce(vector);
    particles[i].update();
    particles[i].edges();
    particles[i].show();
  }

}

function closestVector(p) {
  var x = floor(p.pos.x / density);
  var y = floor(p.pos.y / density);
  var ind = x + y * cols;
  var force = flowField[ind];
  return force;
}
