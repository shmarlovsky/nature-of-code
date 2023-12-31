
class Walker {
  constructor() {
    this.x = width / 2;
    this.y = height / 2;
  }

  draw() {
    stroke(0);
    strokeWeight(5);
    point(this.x, this.y);
  }

  step() {
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


// default walker
// function setup() {
//   createCanvas(windowWidth, 800);
//   walker = new Walker();
//   background(255);

// }
// function draw() {
//   walker.step();
//   walker.draw();
// }


// random gaussian dots
function setup() {
  createCanvas(windowWidth, 800);
  background(255);

  slider = createSlider(2, 100, 50);
  slider.position(10, 10);
  slider.size(150);
}

function draw() {
  let d = slider.value();
  let x = randomGaussian(windowWidth / 2, d);
  let y = randomGaussian(windowHeight / 2, d);

  // gaussian color
  let r = randomGaussian(125, 80);
  let g = randomGaussian(125, 80);
  let b = randomGaussian(125, 80);

  stroke(r, g, b);
  strokeWeight(5);
  point(x, y);

}