class Mover {
  constructor() {
    this.position = createVector(width / 2, height / 2);
    this.velocity = createVector(0, 0);
    this.acceleration = 0;
    this.topspeed = 4;
    this.xoff = 1000;
    this.yoff = 0;
    this.r = 16;
  }

  update() {
    let mouse = createVector(mouseX, mouseY);
    let dir = p5.Vector.sub(mouse, this.position);
    dir.normalize();
    dir.mult(0.5);
    this.acceleration = dir;

    this.velocity.add(this.acceleration);
    this.velocity.limit(this.topspeed);
    this.position.add(this.velocity);
  }

  show() {
    let angle = this.velocity.heading();

    stroke(0);
    strokeWeight(2);
    fill(127);
    push();
    rectMode(CENTER);

    translate(this.position.x, this.position.y);
    rotate(angle);
    // rect(0, 0, 30, 10);
    let r = this.r * 2
    triangle(0, r / 4, 0, -r / 4, r, 0);

    pop();
  }

  checkEdges() {
    if (this.position.x > width) {
      this.position.x = 0;
    } else if (this.position.x < 0) {
      this.position.x = width;
    }

    if (this.position.y > height) {
      this.position.y = 0;
    } else if (this.position.y < 0) {
      this.position.y = height;
    }
  }
}

let m;

function setup() {
  createCanvas(windowWidth * 0.96, windowHeight * 0.96);
  background(255);
  m = new Mover();
  m.position = createVector(200, 200);
  m.radius = 30;
  // m.angleVelocity = 0.05;

}

function draw() {
  background(255);
  m.update();
  m.show();

  // mouse = createVector(mouseX, mouseY);
  // line(m.position.x, m.position.y, mouse.x, mouse.y);
  // dist = p5.Vector.sub(mouse, m.position).normalize();
  // mouseHeading = mouse.heading();
  // text(`Radians: ${mouseHeading}`, -0, 10);
  // m.angle = mouseHeading;

}
