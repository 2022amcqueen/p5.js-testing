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
		for(let z = 0; z < 100; z++) {
			//push()
			box(50, 50, 50)
			
			translate(x * 150, 0, z * 150)
			//pop()
		}
	}

	//translate(width / 2, 0, height / 2)
}
