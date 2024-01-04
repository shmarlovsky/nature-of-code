let liquid;
let movers = [];

function setup() {
  createCanvas(windowWidth * 0.96, windowHeight * 0.96);

  liquid = new Liquid(0, height / 2, width, height, 0.1);

  for (let i = 0; i < 5; i++) {
    let mass = random(0.1, 5);
    movers[i] = new Mover(40 + i * 70, 0, mass);
  }

}

function draw() {
  background(255);
  liquid.show();
  for (let i = 0; i < movers.length; i++) {

    if (liquid.contains(movers[i])) {
      let dragForce = liquid.calculateDrag(movers[i]);
      movers[i].applyForce(dragForce);
    }

    let gravity = createVector(0, 0.1 * movers[i].mass);

    movers[i].applyForce(gravity);

    movers[i].update();
    movers[i].show();
    movers[i].checkEdges();

  }



}
