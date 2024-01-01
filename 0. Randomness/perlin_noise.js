let t = 0;
function setup() {
  createCanvas(windowWidth*0.96, windowHeight*0.96);
}

function draw() {
  background(255);
  noFill();
  let xoff = t;
  stroke(0);
  strokeWeight(2);
  beginShape();
  for (let i = 0; i < windowWidth; i++) {
    let n = noise(xoff);
    // let y = noise(xoff) * windowHeight;
    let y = map(n, 0, 1, 0, windowHeight);
    xoff += 0.005;
    vertex(i, y);
  }
  endShape();
  t += 0.005;
}