function setup() {
    createCanvas(600, 600, WEBGL)
}

function draw() {
    let rate = .01
    
    background(200)
    
    //normalMaterial()
    
    push()
        rotateX(frameCount * rate)
        rotateY(frameCount * rate)
        rotateZ(frameCount * rate)
    
        sphere(150)
    pop()
    
    translate(width / 2, 0, height / 2)
}
