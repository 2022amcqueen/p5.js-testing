function setup() {
    createCanvas(600, 600, WEBGL)
}

function draw() {
    background(200)
    
    normalMaterial()
    
    push()
        sphere(150, 3)
        rotateX(frameCount * 1)
    pop()
    
    translate(width / 2, 0, height / 2)
}
