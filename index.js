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
    
        box(150, 150, 150)
        translate(frameCount * 150, 0, frameCount * 150)
    pop()
    
    translate(width / 2, 0, height / 2)
}
