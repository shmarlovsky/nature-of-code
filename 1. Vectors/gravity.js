class Attractor {
  constructor(x, y) {
    this.position = createVector(x, y);
    this.mass = 20;
  }

  attract(mover) {
    let force = p5.Vector.sub(this.position, mover.position);
    let distance = force.mag();

    distance = constrain(distance, 5, 25);

    let strength = (G * this.mass * mover.mass) / (distance * distance);
    force.setMag(strength);
    return force;

  }

  show() {
    stroke(0);
    fill(175, 200);
    circle(this.position.x, this.position.y, this.mass * 2);
  }
}


class Mover {
  constructor(x, y, mass) {
    this.mass = mass;
    this.radius = mass * 8;
    this.position = createVector(x, y);
    this.velocity = createVector(3, 0);
    this.acceleration = createVector(0, 0);
  }
  // Newton's 2nd law: F = M * A
  // or A = F / M
  applyForce(force) {
    let f = p5.Vector.div(force, this.mass);
    this.acceleration.add(f);
  }

  update() {
    // Velocity changes according to acceleration
    this.velocity.add(this.acceleration);
    // position changes by velocity
    this.position.add(this.velocity);
    // We must clear acceleration each frame
    this.acceleration.mult(0);
  }

  show() {
    stroke(0);
    strokeWeight(2);
    fill(127, 127);
    circle(this.position.x, this.position.y, this.radius * 2);
  }
}


let mover;
let attractor;
let attractor2;

let G = 1.0;

function setup() {
  createCanvas(640, 240);
  createCanvas(windowWidth * 0.96, windowHeight * 0.96);
  mover = new Mover(random(width / 2), random(height / 2), 2);
  attractor = new Attractor(width / 4, height / 2);
  attractor2 = new Attractor(width / 4 * 3, height / 2);
}

function draw() {
  background(255);

  let force = attractor.attract(mover);
  let force2 = attractor2.attract(mover);
  mover.applyForce(force);
  mover.applyForce(force2);

  mover.update();
  attractor.show();
  attractor2.show();
  mover.show();
}
