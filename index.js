function setup() {
    createCanvas(600, 600, WEBGL)
}

function draw() {
    let rate = .01
    
    background(200)
    
    //normalMaterial()
    
    
    rotateX(frameCount * rate)
    rotateY(frameCount * rate)
    rotateZ(frameCount * rate)

    push()
        for(let i = 0; i < 100; i++) {
            box(150, 150, 150)
            translate(i * 150, 0, i * 150)
        }
    pop()
    
    translate(width / 2, 0, height / 2)
}
