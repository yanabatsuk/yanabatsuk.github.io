function setup() {
    // Create canvas
    createCanvas(710,400);

    //Set background to black
    background(0);

    // Set width of the strokes(lines)
    strokeWeight(10);

    // Set color mode to hue-saturation-brightness (HSB)
    colorMode(HSB);

    // Set screen reader accessible description
    describe('A blank canvas where theuser draws by draggin the mosue');
}

function mouseDragged(){
    // Set the color based on the mouse position, and draw a line
    // from the previous position to the curret position
    let lineHue = (mouseX - mouseY) % 360;
    stroke(lineHue, 150, 75);
    line(pmouseX, pmouseY, mouseX, mouseY);
}