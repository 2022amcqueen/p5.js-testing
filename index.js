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
	
	for(let x = 0; x < 1000; x += 50) {
		for(let y = 0; y < 1000; y += 50) {		
			push()
				box(50, 50, 50)
				translate(x, y, 0)
			pop()
		}
	}

	//translate(width / 2, 0, height / 2)
}
