class Baloon {
  constructor(radius) {
    this.position = createVector(random(radius, width - radius), random(radius, height - radius));
    this.velocity = createVector();
    this.acceleration = createVector();
    this.radius = radius;
    this.hitTop = 0;
  }

  update() {
    this.checkEdges();
    this.velocity.add(this.acceleration);
    this.position.add(this.velocity);
    this.acceleration.mult(0);
  }

  applyForce(force) {
    this.acceleration.add(force);
  }

  checkEdges() {
    let p = this.position;
    let radius = this.radius;

    if (p.y + radius > height) {
      p.y = height - radius;
    }

    if (p.y <= radius) {
      p.y = radius;
      this.hitTop = 3;
    }

    if (this.hitTop) {
      this.applyForce(createVector(0, 0.9));
      this.hitTop--;
    }


  }

  clearAcceleration() {
    this.acceleration.mult(0)
  }

  draw() {
    stroke(0, 0, 200);
    fill(0, 0, 200);
    circle(this.position.x, this.position.y, this.radius * 2);
  }
}

let m;

function setup() {
  createCanvas(windowWidth * 0.96, windowHeight * 0.96);
  background(255);

  m = new Baloon(30);
}

function draw() {
  frame()

}

function mousePressed() {
  frame();
}

function frame() {
  background(255);
  let antiGravity = createVector(0, -0.1);
  m.applyForce(antiGravity);

  m.update();
  m.draw();
}
