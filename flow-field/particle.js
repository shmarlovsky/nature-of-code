class Particle {
  constructor() {
    this.pos = createVector(5, random(height));
    this.vel = createVector(1, 0);
    this.acc = createVector(0, 0);
    this.maxspeed = 4;
    this.prevPos = this.pos.copy();
  }

  update() {
    this.vel.add(this.acc);
    this.vel.limit(this.maxspeed);
    this.pos.add(this.vel);
    this.acc.mult(0);
  }

  applyForce(force) {
    this.acc.add(force);
  }

  show() {
    // var r = map(this.pos.x, 0, width, r1, r2);
    // var g = map(this.pos.y, 0, height, g1, g2);
    // var b = map(this.pos.x, 0, width, b1, b2);
    var r = map(this.pos.x, 0, width, 50, 255);
    var g = map(this.pos.y, 0, height, 50, 255);
    var b = map(this.pos.x, 0, width, 255, 50);
    var alpha = map(this.pos.x + this.pos.y, 0, width+height, 0, 255);
    // stroke(255);
    stroke(r, g, b, alpha);
    strokeWeight(1);
    // circle(this.pos.x, this.pos.y, 10);
    line(this.pos.x, this.pos.y, this.prevPos.x, this.prevPos.y);
    this.updatePrevPos();
  }

  updatePrevPos() {
    this.prevPos.x = this.pos.x;
    this.prevPos.y = this.pos.y;
  }

  edges() {
    if (this.pos.x < 0) {
      this.pos.x = width;
      this.updatePrevPos();
    }
    if (this.pos.x > width) {
      this.pos.x = 0;
      this.updatePrevPos();
    }
    if (this.pos.y < 0) {
      this.pos.y = height;
      this.updatePrevPos();
    }
    if (this.pos.y > height) {
      this.pos.y = 0;
      this.updatePrevPos();
    }
  }

}
