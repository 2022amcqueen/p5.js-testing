function setup() {
	createCanvas(2500, 2500, WEBGL)
}

function draw() {
	let rate = .01
	
	background(200)
	
	for(let x = 0; x < 1000; x += 50) {
		for(let z = 0; z < 1000; z += 50) {
			push()
				let y = noise(x * 0.01, z * 0.01) * 50
				
				y = floor(y) * 50
				
				translate(x, y, z)
				box(50, 50, 50)
			pop()
		}
	}
	

	//translate(width / 2, 0, height / 2)
}
