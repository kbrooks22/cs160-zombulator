// Zombulator by Kai Brooks

function setup() {
createCanvas(800,800)
}

function draw() {
	fill(255, 0, 0)
  ellipse(50, 50, 80, 80);
  fill(150, 30, 30)
  ellipse(200, 100, 80, 80);
}

function draw() {
	if (MouseIsPressed) {
		fill(0);
	}else{
		fill(255);
	}
	ellipse(mouseX, mouseY, 20,20);
}