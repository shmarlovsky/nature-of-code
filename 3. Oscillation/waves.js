class Wave {
  constructor(x, y, w, amplitude, period) {
    // How far apart should each horizontal position be spaced
    this.xspacing = 8;
    // Width of entire wave, in pixels
    this.w = w;

    // Where does the wave's first point start
    this.origin = createVector(x, y);
    this.theta = 0.0; // Start angle at 0
    this.amplitude = amplitude; // Height of wave

    // How many pixels before the wave repeats
    this.period = period;
    // Value for incrementing X, to be calculated as a function of period and xspacing
    this.dx = (TWO_PI / this.period) * this.xspacing;
    // Using an array to store height values for the wave (not entirely necessary)
    this.yvalues = new Array(floor(this.w / this.xspacing));
    for (let i = 0; i < this.yvalues.length; i++) {
      this.yvalues[i] = 0;
      print(this.yvalues[i]);
    }
  }

  update() {
    // Increment theta (try different values for 'angular velocity' here
    this.theta += 0.03;

    // For every x value, calculate a y value with sine function
    let x = this.theta;
    for (let i = 0; i < this.yvalues.length; i++) {
      this.yvalues[i] = sin(x) * this.amplitude;
      x += this.dx;
    }
  }

  show() {
    beginShape();
    for (let x = 0; x < this.yvalues.length; x++) {
      stroke(0);
      // fill(0, 50);
      // circle(
      //   this.origin.x + x * this.xspacing,
      //   this.origin.y + this.yvalues[x],
      //   radius,
      // );
      noFill();
      strokeWeight(3);
      vertex(
        this.origin.x + x * this.xspacing,
        this.origin.y + this.yvalues[x],
      )
    }
    endShape();
  }
}


let wave0, wave1;
let waves = [];
let resWave;

function setup() {
  createCanvas(windowWidth * 0.96, windowHeight * 0.96);
  waves.push(new Wave(0, height / 4 - 50, width, 40, 400));
  waves.push(new Wave(0, height / 4 * 3 + 50, width, 20, 180))
  resWave = new Wave(0, height / 2, width, 20, 200);
  print(resWave);
}

function draw() {
  background(255);

  for (let i = 0; i < waves.length; i++) {
    waves[i].update();
    waves[i].show();
  }

  for (let i = 0; i < waves.length; i++) {
    for (let j = 0; j < resWave.yvalues.length; j++) {
      resWave.yvalues[j] = 0;
    }
  }
  for (let i = 0; i < waves.length; i++) {
    for (let j = 0; j < resWave.yvalues.length; j++) {
      resWave.yvalues[j] += waves[i].yvalues[j];
    }
  }
  resWave.show();
}


function showSum() {
  beginShape();
  for (let x = 0; x < this.yvalues.length; x++) {
    stroke(0);
    noFill();
    strokeWeight(3);
    vertex(
      this.origin.x + x * this.xspacing,
      this.origin.y + this.yvalues[x],
    )
  }
  endShape();
}
