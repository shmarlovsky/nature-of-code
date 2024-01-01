
function setup() {
    let w = 800;
    let h = 500;
    xoff = 10000.0;
    createCanvas(w, h);
    loadPixels();
    for (let x = 0; x < w; x++) {
        yoff = 0.0;
        for (let y = 0; y < h; y++) {
            let index = (x + y * w) * 4;

            // let bright = random(255);
            let bright = map(noise(xoff, yoff), 0, 1, 0, 255);

            // Set the red, green, and blue values.
            pixels[index] = bright;
            pixels[index + 1] = bright;
            pixels[index + 2] = bright;

            // Set the alpha value to 255 (no transparency).
            pixels[index + 3] = 255;
            yoff += 0.01;
        }
        xoff += 0.01;

    }
    updatePixels();
}

