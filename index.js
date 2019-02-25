function setup() {
    createCanvas(600, 600, WEBGL)
    background(51)
}

function draw() {
    sphere(300, 5)
    translate(width / 2, 0, height / 2)
}
