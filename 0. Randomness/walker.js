class Walker {
  constructor() {
    this.x = width / 2;
    this.y = height / 2;
    this.n = 0;
  }

  draw() {
    stroke(0);
    strokeWeight(3);
    point(this.x, this.y);
  }

  // step size is specified with Perlin noise
  stepSizeWithPerlinNoise() {
    let step = map(noise(this.n), 0, 1, 3, 5);
    let r = random(1);
    this.n += 0.01;

    if (r < 0.25) {
      this.x += step;
    } else if (r < 0.5) {
      this.x -= step;
    } else if (r < 0.75) {
      this.y += step;
    } else {
      this.y -= step;
    }

  }

  // 50 % chance to go to mouse position
  stepFollowMouse() {
    let step = 1;
    let r = random(1);

    if (r < 0.5) {
      if (this.x < mouseX) {
        this.x += step;
      } else {
        this.x -= step;
      }
      if (this.y < mouseY) {
        this.y += step;
      } else {
        this.y -= step;
      }

    } else {

      if (r < 0.6) {
        this.x += step;
      } else if (r < 0.7) {
        this.x -= step;
      } else if (r < 0.8) {
        this.y += step;
      } else {
        this.y -= step;
      }
    }

  }
}

let walker;

function setup() {
  createCanvas(windowWidth*0.96, windowHeight*0.96);
  walker = new Walker();
  background(255);

}
function draw() {
  // walker.stepFollowMouse();
  walker.stepSizeWithPerlinNoise();
  walker.draw();
}