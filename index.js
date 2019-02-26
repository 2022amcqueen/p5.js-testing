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
	
	for(let x = 0; x < 100; x++) {
		for(let y = 0; y < 100; y++) {
			//push()
			box(50, 50, 50)
			
			translate(x * 50, y * 50, 0)
			//pop()
		}
	}

	//translate(width / 2, 0, height / 2)
}
