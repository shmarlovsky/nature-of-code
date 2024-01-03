
class Mover {
  constructor(radius) {
    this.position = createVector(random(radius, width - radius), random(radius, height - radius));
    this.velocity = createVector(random(2, 4), random(2, 4));
    this.acceleration = createVector(0.005, 0.005);
    // this.acceleration = p5.Vector.random2D();
    this.radius = radius;
    this.nOff = 1000;
    this.topSpeed = 10;
  }

  // bouncing ball with random noise acceleration
  update() {
    this.acceleration = p5.Vector.random2D();
    // this.acceleration.mult(random(0.7));
    this.acceleration.mult(noise(this.nOff));
    this.velocity.add(this.acceleration);
    this.position.add(this.velocity);
    this.checkEdges();
    this.nOff += 0.01;
  }

  checkEdges() {
    let position = this.position;
    let velocity = this.velocity;
    let radius = this.radius;
    let acceleration = this.acceleration;

    if (position.x + radius > width || position.x - radius < 0) {
      velocity.x = velocity.x * -1;
      acceleration.x = acceleration.x * -0.5;
    }
    if (position.y + radius > height || position.y - radius < 0) {
      velocity.y = velocity.y * -1;
      acceleration.y = acceleration.y * -0.5;
    }
  }

  updateFollowMouse() {
    let mouse = createVector(mouseX, mouseY);
    let dir = p5.Vector.sub(mouse, this.position);
    let distanse = dir.mag();
    let multiplier = 1 - map(distanse, 0, width, 0, 0.8);
    dir.normalize();
    dir.mult(multiplier);

    this.acceleration = dir;
    this.velocity.add(this.acceleration);
    this.velocity.limit(this.topSpeed);
    this.position.add(this.velocity);
  }

  draw() {
    stroke(0, 0, 200);
    fill(0, 0, 200);
    circle(this.position.x, this.position.y, this.radius * 2);
  }
}

let b;

function setup() {
  createCanvas(windowWidth * 0.96, windowHeight * 0.96);
  background(255);

  b = new Mover(30);
}

function draw() {
  background(255);
  // m.update();
  b.updateFollowMouse();
  b.draw();
}

