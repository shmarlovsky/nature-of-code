var scl = 20;
var step = 0.03;
var zstep = 0.0003;
var cols;
var rows;

var zoff = 0;
var particles = [];
var flowField;

var fr;

var r1;
var r2;
var g1;
var g2;
var b1;
var b2;

function setup() {
  createCanvas(800, 600);
  // createCanvas(1920, 1080);
  background(30);
  cols = floor(width / scl);
  rows = floor(height / scl);
  fr = createP("");

  noiseDetail(1);

  flowField = new Array(cols*rows);

  for (var i = 0; i < 500; i++) {
    p = new Particle();
    particles[i] = p;
  }

  r1 = random(255);
  r2 = random(255);
  g1 = random(255);
  g2 = random(255);
  b1 = random(255);
  b2 = random(255);


}

function draw() {
  fr.html(`FPS: ${floor(frameRate())}`)
  // background(40);

  r1 = random(125);
  r2 = random(125, 255);
  g1 = random(125);
  g2 = random(125, 255);
  b1 = random(125);
  b2 = random(125, 255);

  var yoff = 0;

  for (var y = 0; y < rows; y++) {
    var xoff = 0;
    for (var x = 0; x < cols; x++) {
      xoff += step;

      // var angle = noise(xoff, yoff, zoff) * TWO_PI * 4;
      var angle = noise(x*step, y*step, zoff) * TWO_PI * 2;
      // var angle = noise(xoff, yoff, zoff) * TWO_PI;
      // var v = p5.Vector.fromAngle(angle);
      // var v = createVector(x*scl, y*scl);
      // v.add(createVector(cos(angle), sin(angle)));
      // var v = createVector(cos(angle)*step, sin(angle)*step);
      var v = createVector(cos(angle), sin(angle));
      v.setMag(5);

      var index = x + y*cols;
      flowField[index] = v
      // drawVector(v, x*scl, y*scl);

    }
    yoff += step;
    zoff += zstep;
  }

  for (var i = 0; i < particles.length; i++) {
    vector = closestVector(particles[i])
    particles[i].applyForce(vector);
    particles[i].update();
    particles[i].edges();
    particles[i].show();
  }

}

function drawVector(v, baseX, baseY) {
  stroke(255, 80);
  strokeWeight(1);
  push();
  translate(baseX, baseY);
  rotate(v.heading());
  line(0, 0, scl, 0);
  // triangle(scl/4*3,-scl/4, scl, 0, scl/4*3, scl/4);
  pop();

}

function closestVector(p) {
  var x = floor(p.pos.x / scl);
  var y = floor(p.pos.y / scl);
  var ind = x + y*cols;
  var force = flowField[ind];
  return force;
}