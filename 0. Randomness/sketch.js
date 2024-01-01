
// pixels

const pixels = (p) => {
  let w= p5.prototype.windowWidth * 0.48;
  let h= p5.prototype.windowHeight * 0.5;
  p.setup = function () {
    xoff = 10000.0;
    p.createCanvas(w, h);
    p.loadPixels();
    for (let x = 0; x < w; x++) {
      yoff = 0.0;
      for (let y = 0; y < h; y++) {
        let index = (x + y * w) * 4;

        // let bright = random(255);
        let bright = p.map(p.noise(xoff, yoff), 0, 1, 0, 255);

        // Set the red, green, and blue values.
        p.pixels[index] = bright;
        p.pixels[index + 1] = bright;
        p.pixels[index + 2] = bright;

        // Set the alpha value to 255 (no transparency).
        p.pixels[index + 3] = 255;
        yoff += 0.01;
      }
      xoff += 0.01;

    }
    p.updatePixels();
  }

  p.windowResized = function () {
    p.resizeCanvas(wWidth, wHeight);
  };
};

// let pPixels = new p5(pixels, "pixels");


const s = (p) => {

  let x = 100;
  let y = 100;
  let wWidth = p5.prototype.windowWidth * 0.48;
  let wHeight = p5.prototype.windowHeight * 0.5;

  p.setup = function () {
    p.createCanvas(wWidth, wHeight);
  };

  p.draw = function () {
    p.background(0);
    p.fill(255);
    p.rect(x, y, 50, 50);
  };

  p.windowResized = function () {
    p.resizeCanvas(windowWidth, windowHeight);
  };
};

// let s1 = new p5(s, 'test');