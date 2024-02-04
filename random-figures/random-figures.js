/// <reference path="./../p5.global-mode.d.ts" />
let c1 = 0;
let c2 = 0;
let nx = 300;
let ny = 300;
let cR = 20;

let centerX;
let centerY;

function setup() {
    createCanvas(600, 600)
    background(20);
    stroke(255)

    centerX = width / 2;
    centerY = height / 2;

}

function draw() {
    stroke(255, 50);

    let l = 150;

    nx = sin(c1) * cR + centerX;
    ny = cos(c1) * cR + centerY;

    let x1 = nx - sin(c2) * l;
    let y1 = ny - cos(c2) * l;
    let x2 = nx + sin(c2) * l;
    let y2 = ny + cos(c2) * l;

    // singleLine(width/2, height/2);
    singleLine(x2, y2);
    // singleLine(x1, y1);
    // line(x1, y1, x2, y2);
    c2 += 0.1
    if (c2 > TWO_PI) {
        c2 = 0;
    };
    c1 += 0.01;
    if (c1 > TWO_PI) {
        c1 = 0;
    }
    cR += c2/20;
    // debugCircle(nx, ny);
    // noLoop()

}

function singleLine(ncx, ncy) {
    let length = 100;
    // debugCircle(ncx, ncy)

    x1 = ncx - sin(c1) * length;
    y1 = ncy - cos(c1) * length;

    x2 = ncx + sin(c1) * length;
    y2 = ncy + cos(c1) * length;

    line(x1, y1, x2, y2);

    // debug

}

function debugCircle(x, y) {
    push()
    stroke(0, 200, 0)
    fill(0, 200, 0)
    circle(x, y, 10)
    pop()
}
