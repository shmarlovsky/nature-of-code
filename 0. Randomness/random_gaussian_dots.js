function setup() {
  createCanvas(windowWidth*0.96, windowHeight*0.96);
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