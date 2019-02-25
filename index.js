function setup() {
    createCanvas(600, 600, WEBGL)
    background(51)
}

function draw() {
    normalMaterial()
    sphere(150, 3)
    
    translate(width / 2, 0, height / 2)
    rotate(frameCount)
}
