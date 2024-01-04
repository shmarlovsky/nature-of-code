class Mover {
  constructor(x, y, mass) {
    this.position = createVector(x, y);
    this.velocity = createVector(random(2, 4), random(2, 4));
    this.acceleration = createVector(0.005, 0.005);
    // this.acceleration = p5.Vector.random2D();
    this.radius = mass * 8;
    this.mass = mass
    this.nOff = 1000;
    this.topSpeed = 10;
  }

  // bouncing ball with random noise acceleration
  update() {
    // this.acceleration = p5.Vector.random2D();
    // this.acceleration.mult(random(0.7));
    // this.acceleration.mult(noise(this.nOff));
    this.velocity.add(this.acceleration);
    this.position.add(this.velocity);
    this.acceleration.mult(0);
    this.checkEdges();
    this.nOff += 0.01;
  }

  checkEdges() {
    let position = this.position;
    let velocity = this.velocity;
    let radius = this.radius;

    if (position.x + radius > width || position.x - radius < 0) {
      velocity.x = velocity.x * -1;
    }
    if (position.y + radius > height || position.y - radius < 0) {
      velocity.y = velocity.y * -1;
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

  show() {
    stroke(0, 0, 200);
    fill(0, 0, 200);
    circle(this.position.x, this.position.y, this.radius * 2);
  }

  applyForce(force) {
    this.acceleration.add(force);
  }
}


class Liquid {
  constructor(x, y, w, h, coeff) {
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
    this.c = coeff;
  }

  show() {
    noStroke();
    fill(175);
    rect(this.x, this.y, this.w, this.h);
  }

  contains(mover) {
    let pos = mover.position;

    return (pos.x > this.x && pos.x < this.x + this.w &&
      pos.y > this.y && pos.y < this.y + this.h);
  }

  calculateDrag(mover) {
    let speed = mover.velocity.mag();

    // Set the force’s magnitude: Cd * v^2.
    let dragMagnitude = this.c * speed * speed;

    // Set the force’s direction: –1 * velocity.
    let dragForce = mover.velocity.copy();
    // let dragForce = mover.velocity.copy().normalize();
    dragForce.mult(-1);

    // Finalize the force: Set the magnitude and direction together.
    dragForce.setMag(dragMagnitude);
    return dragForce

  }

}
